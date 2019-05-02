import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-corporates',
  templateUrl: './corporates.component.html',
  styleUrls: ['./corporates.component.css']
})
export class CorporatesComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  title = "Corporates List";
  corporates: string []; 

  ngOnInit() {
    this.httpService.get('./assets/corp.json').subscribe(
      data => {
        this.corporates = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
