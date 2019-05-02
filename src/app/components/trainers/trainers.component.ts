import { Component,Inject, OnInit, EventEmitter, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,FormGroupDirective, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  constructor(private httpService: HttpClient,private dialog: MatDialog,private router: Router) { }
  title = "Trainers List";
  public searchText : string;
  trainers: string []; 
  items:any;
  openCreate(): void {
    const dialogRef = this.dialog.open(TrainerCreateComponent, {
      width: '400px',

    });
    // dialogRef.afterClosed().subscribe(() => {
    //   this.fetchtrainers();
    // });
  }



  ngOnInit() {
    this.httpService.get('./assets/trainers.json').subscribe(
      data => {
        this.trainers = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  ngOnDestroy(){
    this.dialog.closeAll();
  }

}
@Component({
  templateUrl: 'trainers-dialoge.html',
  styleUrls: ['trainers-dialoge.css']
})
export class TrainerCreateComponent {

  createForm: FormGroup;
  private formSubmitAttempt: boolean;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<TrainersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private addUser: AddUserService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.createForm = this.fb.group({
      username: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.email],
    phonenumber: ['',Validators.required],
    password: ['', Validators.required],
    roleid: ['', Validators.required]
  })
 // let matcher = new UsersComponent();
  }

  // isFieldInvalid(field: string) {
  //   return (
  //     (!this.createForm.get(field).valid && this.createForm.get(field).touched) ||
  //     (this.createForm.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // createUser(firstname, lastname, username, phone, email, password, roleid){

  //   this.addUser.createUser(firstname, lastname, username, phone, email, password, roleid).subscribe(res => {
  //     let data = res;
  //     console.log(res);
  //     this.dialogRef.close();
  //     setTimeout(() => {
  //       if(data.hasOwnProperty('error') ){
  //         alert("Username Already Exist. Please Try Other Username.")
  //       }
  //     }, 200);


  //     this.router.navigate['/user']
  //     });
  // } 
}
@Component({
  templateUrl: 'dialog.component.html'
})
export class MatConfirmDialogComponent implements OnInit{

  message: any;

  constructor(
    public dialogRef: MatDialogRef<TrainersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
     console.log(this.data);
    }

    ngOnInit(){
      
    }


    onNoClick(): void {
      this.dialogRef.close();
    }

}

