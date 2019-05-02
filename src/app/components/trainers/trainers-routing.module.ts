import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainersComponent, TrainerCreateComponent } from './trainers.component';

const routes: Routes = [
  {
    path: 'trainers',
    component: TrainersComponent,
    data: {
      title: 'trainers'
    }
  },
  {
    path: 'create',
    component: TrainerCreateComponent
  },
  {
    path: '',
    redirectTo: 'trainers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

// exports: [RouterModule]
})
export class TrainersRoutingModule {}
