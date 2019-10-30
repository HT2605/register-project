import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'register-project';
  myForm: FormGroup;
  numberT: boolean;

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
    console.log(this.myForm.value);
    this.formatNum()
  }

  resetForm() {
    this.myForm.reset();
  }

  formatNum() {
    const NUMBER_REGEX = /^([0-9]*)$/g;
    if (this.myForm.get('phone') && this.myForm.value.phone) {
      if (typeof this.myForm.value.phone === 'string') {
        const number = this.myForm.value.phone.toString().trim().replace(/\,([0-9]{3})/g, '$1');
        if (!NUMBER_REGEX.test(number)) {
          this.numberT = true
          return {
            'numberFormat': true
          };
        } else {
          this.numberT = false
        }
      } else {
        if (!NUMBER_REGEX.test(this.myForm.value.phone)) {
          
          return {
            'numberFormat': true,
          };
        }
      }
    } 
  }
}
