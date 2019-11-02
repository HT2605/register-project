import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/public_api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ag-modal',
  templateUrl: './ag-modal.component.html',
  styleUrls: ['./ag-modal.component.scss']
})
export class AgModalComponent implements OnInit {
  @ViewChild('modal', {static: false}) modal: ModalDirective
  @Output() dataAdd = new EventEmitter
  @Output() dataUpdate = new EventEmitter
  myForm: FormGroup;
  modify: boolean;
  data
  lockbtn: boolean = false
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  open(data, modify?) {
    this.myForm.disable()
    
    // add
    this.modal.show();
    if (!data && !modify) {
      this.modify = undefined
      this.lockbtn = false
      this.myForm.reset()
      this.myForm.controls.name.enable()
      this.myForm.controls.age.enable()
      this.myForm.controls.location.enable()
      console.log(this.modify);
      
    }

    //view
    if (data && !modify) {
      this.modify = undefined
      this.lockbtn = true
      this.myForm.patchValue(data)
    }

    //update
    if (data && modify) {
      this.lockbtn = false
      this.modify = modify
      this.myForm.patchValue(data)
      this.myForm.controls.name.enable()
      this.myForm.controls.age.enable()
      this.myForm.controls.location.enable()
      console.log(this.modify)
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

  add() {
    if (!this.modify) {
      this.dataAdd.emit(this.myForm.value)
      this.modal.hide();
    } else {
      this.dataUpdate.emit(this.myForm.value)
      this.modal.hide();
    }
  }
}
