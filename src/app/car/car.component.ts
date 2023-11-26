import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  id: number;
  brand: string;
  model: string;
  regPlate: string;
  productionYear: number;
  status: number;

  constructor(){
    this.id = 1;
    this.brand = 'Skoda';
    this.model = 'Octavia';
    this.regPlate = 'BI99999';
    this.productionYear = 2009;
    this.status = 0;
  }

}
