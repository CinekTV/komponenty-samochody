import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports:[
    ReactiveFormsModule
  ]
})

export class LoginComponent{
  title = 'logowanie';
  loginForm = this.fb.group({
    login: ['',Validators.required],
    password: ['', Validators.required]
  })
  constructor(private router: Router, private fb: FormBuilder) {}

navigateToRegister() {
  this.router.navigate(['/register']);
}

navigateToHome() {
  this.router.navigate(['/contact']);
}

get login() {
  return this.loginForm.controls['login'];
}
get password() {
  return this.loginForm.controls['password'];
}
onSubmit(): void {
  console.log('submitted form', this.loginForm.value);
}

}

