import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor() { }
  logOut() {
    alert("logout")
    // this.authToken = null; // Set token to null
    // this.user = null; // Set user to null
    //localStorage.removeItem('admin');
    localStorage.clear() // Clear local storage
  }
  ngOnInit() {}
 

}
