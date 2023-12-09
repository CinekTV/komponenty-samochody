import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../../types/car';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  car:Car

  constructor(){
    this.car = {
    id: 1,
    brand: 'Skoda',
    model: 'Octavia',
    regPlate: 'BI99999',
    productionYear: 2009,
    status: 0,
    };
  }

}
