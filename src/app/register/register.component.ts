import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../types/user';
import { UserService } from '../user.service';

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

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.initForm();
  }

  matchPassword(control: any): { [key: string]: boolean } | null {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = control.value;
    return password === confirmPassword ? null : { 'mismatch': true };
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      email: [
        this.user.getEmail(),
        [Validators.required, Validators.email] 
      ],

      phone:[
        this.user.getPhone(),
        [Validators.required,Validators.pattern(/^[0-9]{9}$/)]
      ],
      
      firstName: [
        this.user.getFirstName(), 
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(2)]
      ],
      lastName: [
        this.user.getLastName(), 
        [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(2)]
      ],
      password: [
        '', 
      [Validators.required, Validators.minLength(4)]
    ],
    confirmPassword: [
      '', 
      [Validators.required, this.matchPassword.bind(this)]
    ],
    });
  }
  
  register() {
    if (this.registerForm.valid) 
    {
      const formData = this.registerForm.value;
              const newUser = new User();
              newUser.setFirstName(formData.firstName);
              newUser.setLastName(formData.lastName);
              newUser.setEmail(formData.email);
              newUser.setPassword(formData.password);
              newUser.setPhone(formData.phone);
  
              this.userService.addUser(newUser);
              this.router.navigate(['']);
            
           // else {console.log("Email zajety");}
  
      console.log('User Details:', this.user);
    } 
    
    else {
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