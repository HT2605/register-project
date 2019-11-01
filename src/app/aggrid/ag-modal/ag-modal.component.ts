import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/public_api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ag-modal',
  templateUrl: './ag-modal.component.html',
  styleUrls: ['./ag-modal.component.scss']
})
export class AgModalComponent implements OnInit {
  @ViewChild('modal', {static: false}) modal: ModalDirective
  myForm: FormGroup;
  modify: boolean;
  data
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  open(data, modify?) {
    this.myForm.disable()
    this.data = data
    this.modal.show();
    this.myForm.patchValue(data)
    if (modify) {
      this.modify = modify
      this.myForm.controls.name.enable()
      this.myForm.controls.age.enable()
      this.myForm.controls.location.enable()
    } 
    if (modify === true) {
      this.myForm.reset()
    } 
    if (modify === false) {
      this.myForm.controls.name.enable()
      this.myForm.controls.age.enable()
      this.myForm.controls.location.enable()
    }
  }

  private buildForm() {
    this.myForm = this.formBuilder.group({
      name: [undefined],
      age: [undefined],
      location: [undefined],
    })
  }

  closeModal() {
    this.modal.hide();
  }
}
