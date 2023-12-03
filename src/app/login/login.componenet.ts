import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{
  title = 'logowanie';

  constructor(private router: Router) {}

navigateToRegister() {
  this.router.navigate(['/register']);
}

navigateToHome() {
  this.router.navigate(['/contact']);
}

}

