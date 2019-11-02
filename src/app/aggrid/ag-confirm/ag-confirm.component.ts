import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/public_api';


@Component({
  selector: 'app-ag-confirm',
  templateUrl: './ag-confirm.component.html',
  styleUrls: ['./ag-confirm.component.scss']
})
export class AgConfirmComponent implements OnInit {
  @ViewChild('modal', { static: false }) modal: ModalDirective
  @Output() cfm = new EventEmitter
  ok: boolean
  constructor() { }

  ngOnInit() {
  }

  open() {
    this.modal.show();
  }

  confirm() {
    this.cfm.emit(this.ok)
    this.modal.hide()
  }

  cancel() {
    this.modal.hide()
  }
}
