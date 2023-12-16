import { Routes, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.componenet'; 
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component'; 
import { CarRentalComponent } from './car-rental/car-rental.component';
import { CarListComponent } from './car-list/car-list.component';
import {RegisterComponent} from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { CarServiceService } from './car-service.service';
// import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

export const routes: Routes = [
    // {path: '**', component: PageNotFoundComponentComponent},
    {path: '', redirectTo: '/contact', pathMatch: 'full'},
    {path:'app',component:AppComponent},
    {path:'login',component:LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'car', component: CarComponent},
    {path: 'car-rental', component: CarRentalComponent},
    {path: 'car-rental/:id', component: CarRentalComponent},
    {path: 'car-list', component: CarListComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'rental-list', component:RentalListComponent}
];


