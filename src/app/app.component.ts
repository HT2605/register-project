import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'register-project';
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.myForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, [Validators.required, Validators.minLength(5)]],
      cfPassword: [undefined],
      email: [undefined, Validators.email],
      location: [undefined, Validators.maxLength(255)],
      phone: [undefined],
      note: [undefined, Validators.maxLength(255)],
    }) 
  }

  submitForm() {
    console.log(this.myForm.get('location'));
    // console.log(this.myForm.get('password'))
  }

  resetForm() {
    this.myForm.reset();
  }
}
