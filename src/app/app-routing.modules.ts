import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ShellComponent } from './components/login/shell.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { LoginComponent } from './components/login/login.component';
import { CorporatesComponent } from './components/corporates/corporates.component';
//import { PageNotFoundComponent } from './home/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path:'trainers',
        component:TrainersComponent
      }
    ]
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path:'corporates',  
        component:CorporatesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
