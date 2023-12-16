import { NgModule } from '@angular/core';
import { Routes, RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.componenet'; 
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component'; 
import { CarRentalComponent } from './car-rental/car-rental.component';
import { CarListComponent } from './car-list/car-list.component';
import {RegisterComponent} from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { CarServiceService } from './car-service.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path: '', redirectTo: '/contact', pathMatch: 'full'},
    {path:'app',component:AppComponent},
    {path:'login',component:LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'car', component: CarComponent},
    {path: 'car-rental', component: CarRentalComponent},
    {path: 'car-rental/:id', component: CarRentalComponent},
    {path: 'car-list', component: CarListComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'rental-list', component:RentalListComponent},
    {path: '**', component: PagenotfoundComponent, pathMatch: 'full'}
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule], 
    providers: [] 
}) 
export class AppRoutingModule { } 