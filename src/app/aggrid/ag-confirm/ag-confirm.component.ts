import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/public_api';


@Component({
  selector: 'app-ag-confirm',
  templateUrl: './ag-confirm.component.html',
  styleUrls: ['./ag-confirm.component.scss']
})
export class AgConfirmComponent implements OnInit {
  @ViewChild('modal', { static: false }) modal: ModalDirective

  constructor() { }

  ngOnInit() {
  }

  open() {
    
    this.modal.show();
  }

}
