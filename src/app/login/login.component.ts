import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});
  public loginError: string | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.initForm();
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  navigateToHome(){
    this.router.navigate(['/contact']);
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const user = this.userService.getUsers().find(u => u.getEmail() === formData.email && u.getPassword() === formData.password);

      if (user) {
        console.log('Zalogowano pomyślnie');
        this.loginError = null; 
      } else {
        console.log('Błąd logowania: Nieprawidłowe dane');
        this.loginError = 'Nieprawidłowe dane logowania';
      }
    } else {
      console.log('Błąd');
      this.getFormValidationErrors();
      this.loginError = 'Formularz zawiera błędy';
    }
  }

  getFormValidationErrors() {
    Object.keys(this.loginForm.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.loginForm.get(key)!.errors!;
      Object.keys(controlErrors || {}).forEach(keyError => {
        console.log(`Key control: ${key}, keyError: ${keyError}, errValue: ${controlErrors[keyError]}`);
      });
    });
  }
}