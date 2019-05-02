import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainersComponent ,TrainerCreateComponent} from './components/trainers/trainers.component';
import { LoginComponent } from './components/login/login.component';
import { ShellComponent } from './components/login/shell.component';
import { MenuComponent } from './components/login/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.modules';
import { CorporatesComponent } from './components/corporates/corporates.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { trainersModule } from './components/trainers/trainers.module';


@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    ShellComponent,
    MenuComponent,
    CorporatesComponent,
    

   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    trainersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
