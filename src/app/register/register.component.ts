import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../types/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({});
  public user: User = new User(); 

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      email: [
        this.user.getEmail(),
        [Validators.required, Validators.email] 
      ],
      phoneNumber: [
        this.user.getPhone(),
        [Validators.required, Validators.pattern(/^[0-9]{9}$/) ]
      ],
      firstName: [
        this.user.getFirstName(), 
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(2)]
      ],
      lastName: [
        this.user.getLastName(), 
        [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3)]
      ],
      password: [
        '', 
      [Validators.required, Validators.minLength(5)]
    ],
    });
  }
  
  register() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
  
      this.user.setEmail(formData.email);
      this.user.setPhone(formData.phoneNumber);
      this.user.setFirstName = formData.firstName;
      this.user.setLastName = formData.lastName;
      this.user.setPassword = formData.password;
  
      console.log('User Details:', this.user);
    } else {
      console.log('Error');
      this.getFormValidationErrors();
    }
  }

  getFormValidationErrors() {
    Object.keys(this.registerForm.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.registerForm.get(key)!.errors!;
      Object.keys(controlErrors || {}).forEach(keyError => {
        console.log(`Key control: ${key}, keyError: ${keyError}, errValue: ${controlErrors[keyError]}`);
      });
    });
  }
}