import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.componenet';
import { RegisterComponent } from './register/register.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { CarComponent } from './car/car.component';



import { HttpClientModule } from '@angular/common/http';
import { CarServiceService } from './car-service.service';
import { UserService } from './user.service';



@NgModule({
  declarations: [
 //  AppComponent,
  //  CarRentalComponent,
    ContactComponent,
    RentalListComponent,
  //  RegisterComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CarServiceService, UserService],
 // bootstrap: [AppComponent]
})
export class AppModule { }

