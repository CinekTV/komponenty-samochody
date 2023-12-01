import { Routes } from '@angular/router';
import { CarComponent } from './car/car.component'; 
import { CarRentalComponent } from './car-rental/car-rental.component';

export const routes: Routes = [
    {path: 'car', component: CarComponent},
    {path: 'car-rental', component: CarRentalComponent}
];
