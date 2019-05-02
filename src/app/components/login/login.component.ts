import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  processing = false;
  messageClass;
  message;
  previousUrl;
  form: FormGroup;
  constructor( private formBuilder: FormBuilder,private router: Router) { 
    this.createForm(); 
  }
  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required], // Username field
      password: ['', Validators.required] // Password field
    });
  }
  disableForm() {
    this.form.controls['username'].disable(); // Disable username field
    this.form.controls['password'].disable(); // Disable password field
  }

  // Function to enable form
  enableForm() {
    this.form.controls['username'].enable(); // Enable username field
    this.form.controls['password'].enable(); // Enable password field
  }
  onLoginSubmit() {
    this.processing = true; // Used to submit button while is being processed
    this.disableForm(); // Disable form while being process
    // Create user object from user's input
    let username = this.form.get('username').value;
    let password = this.form.get('password').value
    const user = {
      username: this.form.get('username').value, // Username input field
      password: this.form.get('password').value // Password input field
    };
    console.log(username,password);


    // Function to send login data to API
  //   this.authService.login(user).subscribe((data: any) => {
  //     // Check if response was a success or error
  //     console.log(data);
      if ((username === "admin" && password === "admin") ){
      //  alert("success")
        this.messageClass = 'alert alert-success'; // Set bootstrap success class
        this.message = "Login Successful"; // Set success message
  //       // Function to store user's token in client local storage
  //   //    this.authService.storeUserData(data.token, data.user);
  //       // After 2 seconds, redirect to dashboard page
        setTimeout(() => {
          if (this.previousUrl) {
            this.router.navigate([this.previousUrl]); // Redirect to page they were trying to view before
          } else {
            this.router.navigateByUrl('/trainers'); // Navigate to dashboard view
          }
        }, 200);
       } else {
       // alert("error")
        this.messageClass = 'alert alert-danger'; // Set bootstrap error class
        this.message = 'User does not exist. Please try again';
     //  this.message = data.response; // Set error message
        this.processing = false; // Enable submit button
        this.enableForm(); // Enable form for editting
  //     }
  //   });
  }
  }
  
  ngOnInit() {
  }

}
