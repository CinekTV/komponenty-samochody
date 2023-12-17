import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Client } from '../../types/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})

export class RegisterComponent implements OnInit{
  title = 'rejestracja';
  public registrationForm: FormGroup = new FormGroup({})
  constructor(private router: Router,private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Z][a-z]*$/)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Z][a-z]*$/)]],
      birthDate: [null, [Validators.required,Validators.min(new Date('1900-01-01').getTime()),Validators.max(new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()).getTime())]], 
      phone: [null,[ Validators.required,Validators.min(399999999), Validators.max(900000000),]],
      adress: ['',Validators.required]      
    });
  }

  submitForm() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.userService.doesEmailExist(formData.email)
        .subscribe({
          next: (result) => {
            console.log(result)
            if (!result) {
              const newClient = new Client(0, formData.firstName, formData.lastName,formData.password, formData.birthDate, formData.email,formData.address, formData.phone, 0);
              this.userService.addClient(newClient);
              this.router.navigate(['']);
            } else {
              console.log("Email already exists!");
            }
          },
          error: (err) => {
            console.log(err);
          }
        });
    } else {
      console.log("Form is not valid!!!");
      this.getFormValidationErrors();
    }
  }
  getFormValidationErrors() {
    Object.keys(this.registrationForm.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.registrationForm.get(key)!.errors!;
      Object.keys(controlErrors || {}).forEach(keyError => {
        console.log(`Key control: ${key}, keyError: ${keyError}, errValue: ${controlErrors[keyError]}`);
      });
    });
  }
}
