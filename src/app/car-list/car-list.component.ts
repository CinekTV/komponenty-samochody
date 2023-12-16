import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink,RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarServiceService } from '../car-service.service';
import { Car } from '../../types/car';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  providers: [CarServiceService],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {
  title = 'samochody';

  cars: Car[] = [];


  constructor(private carService: CarServiceService, private router: Router) { }
  

  sortOptions = [
    { value: 'id', label: 'ID' },
    { value: 'brand', label: 'Marka' },
    { value: 'model', label: 'Model' },
    { value: 'regPlate', label: 'Numer rejestracyjny' },
    { value: 'status', label: 'Status' },
    { value: 'productionYear', label: 'Rok produkcji' }
  ];


  selectedSortOption: string | undefined;
  // currentSortProperty: string | null = null;
  sortBy() {
    if (this.selectedSortOption) {
      switch (this.selectedSortOption) {
        case 'id':
          this.cars.sort((a, b) => a.id - b.id);
          break;
        case 'brand':
          this.cars.sort((a, b) => a.brand.localeCompare(b.brand));
          break;
        case 'model':
          this.cars.sort((a, b) => a.model.localeCompare(b.model));
          break;
        case 'regPlate':
          this.cars.sort((a, b) => a.regPlate.localeCompare(b.regPlate));
          break;
        case 'status':
          this.cars.sort((a, b) => a.status - b.status);
          break;
        case 'productionYear':
          this.cars.sort((a, b) => a.productionYear - b.productionYear);
          break;
        default:
          break;
      }
    }
  }
  
  // Function to handle dynamic sorting
  // sortBy(property: string) {
  //   if (this.currentSortProperty === property) {
  //     // If already sorted by the same property, reverse the order
  //     this.cars.reverse();
  //   } else {
  //     this.currentSortProperty = property;
  //     this.cars.sort((a, b) => (a > b) ? 1 : -1);
  //   }
  // }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  navigateToRent(carId: number) {
    this.router.navigate(['/car-rental', carId]);
  }
  navigateToHome() {
    this.router.navigate(['/contact']);
  }

}