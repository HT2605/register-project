import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgConfirmComponent } from './ag-confirm.component';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [AgConfirmComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ]
})
export class AgConfirmModule { }
