import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {

    title = 'samochody';

    constructor(private router: Router) {}
  
  navigateToRent() {
    this.router.navigate(['/car-rental']);
  }
  navigateToHome() {
    this.router.navigate(['/contact']);
  }

}