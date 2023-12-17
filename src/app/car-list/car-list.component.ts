import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink,RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarServiceService } from '../car-service.service';
import { Car } from '../../types/car';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet,],
  providers: [CarServiceService],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{

    title = 'samochody';

    cars: Car[] = [];


    constructor(private carService: CarServiceService, private router: Router) {}
    

    ngOnInit(): void {
      this.carService.getCars().subscribe(
        (cars: Car[]) => {
          this.cars = cars;
        },
        (error: any) => {
          console.error('Error fetching cars', error);
        }
      );
    }

getMaxId(): number {
    const maxId = Math.max(...this.cars.map((car) => car.id), 0);
    return maxId + 1;
  }
  
  navigateToRent() {
    this.router.navigate(['/car-rental']);
  }
  navigateToHome() {
    this.router.navigate(['/contact']);
  }
  navigateToAddCar()
  {
    this.router.navigate(['/add-car'])
  }

}