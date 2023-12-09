import { Injectable } from '@angular/core';
import { Car } from '../types/car';


@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private cars: Car[] = [];

  constructor() {
    this.cars = [
      {id: 1, brand: 'Skoda', model: 'Octavia', regPlate: 'BI99999', productionYear: 2009, status: 0, image: '../assets/img/skoda.png'},
      {id: 2, brand: 'Suzuki', model: 'Swift', regPlate:'BIA12345', productionYear: 2006, status: 0, image: '../assets/img/suzuki.png'}
    ]
   }

   getCars(): Car[] {
    return this.cars;
   }

   addCar(newCar: Car): void {
    newCar.id=this.cars.length+1;
    this.cars.push(newCar);
   }
}