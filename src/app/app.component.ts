import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'samochody';

  constructor(private router: Router) {}

navigateToLogin() {
  this.router.navigate(['/login']);
}
navigateToCarList() {
  this.router.navigate(['/car-list']);
}
navigateToHome(){
  this.router.navigate(['/contact']);
}

navigateToContact(){
  this.router.navigate(['/contact']);
}

}