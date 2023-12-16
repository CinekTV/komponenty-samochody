import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent{
  title = 'kontakt';

  constructor(private router: Router) {}

navigateToHome() {
  this.router.navigate(['/contact']);
}
navigateToCarList(){
  this.router.navigate(['/car-list']);
}

}