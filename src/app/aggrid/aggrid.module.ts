import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AggridComponent } from './aggrid.component';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgModalComponent } from './ag-modal/ag-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgConfirmComponent } from './ag-confirm/ag-confirm.component';

export const routes: Routes = [
  { path: '', component: AggridComponent }
];

@NgModule({
  declarations: [AggridComponent, AgModalComponent, AgConfirmComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AggridModule { }
