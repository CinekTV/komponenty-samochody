import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Logowanie';
  //loginForm: FormGroup;
  public loginForm: FormGroup = new FormGroup({});
  username: string = ''; 
  password: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  login() {
    if (this.loginForm.valid) {
      // logowanie
      console.log('Zalogowano!');
    } else {
      
      console.log('Błąd logowania.');
    }
  }
}