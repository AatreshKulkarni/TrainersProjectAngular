import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrdFilterPipe } from './search.pipe';

import { TrainersComponent, MatConfirmDialogComponent } from './trainers.component';

import { TrainerCreateComponent } from './trainers.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrainersRoutingModule } from './trainers-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
    MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
    MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
    MatButtonToggleModule,
  
      MatSelectModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [

    TrainersRoutingModule,
    Ng2SearchPipeModule ,
FormsModule,
MatFormFieldModule,
ReactiveFormsModule,
MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
MatButtonToggleModule,MatSelectModule,
MatDialogModule,
CommonModule
  ],
  exports:[

    TrainersRoutingModule,
FormsModule,
ReactiveFormsModule,
MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
  MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
  MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
  MatButtonToggleModule,MatSelectModule,
  MatDialogModule,
CommonModule
  ],
  declarations: [ TrainersComponent, TrainerCreateComponent,  MatConfirmDialogComponent ,GrdFilterPipe],
  // entryComponents: [TrainerCreateComponent,MatConfirmDialogComponent]
})
export class trainersModule { }
