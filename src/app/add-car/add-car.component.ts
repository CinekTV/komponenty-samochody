import { Component } from '@angular/core';
import { Car } from '../../types/car';
import { CarServiceService } from '../car-service.service';
import { CarListComponent } from '../car-list/car-list.component';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  standalone: true,
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
  imports: [
    ReactiveFormsModule
  ]
})
export class AddCarComponent {
  constructor(
    private fb: FormBuilder,
    private carService: CarServiceService,
    private router: Router,
    private carList: CarListComponent
  ) {}

  addCarForm = this.fb.group({
    brand: ['', Validators.required],
    model: ['', Validators.required],
    regPlate: ['', Validators.required],
    productionYear: ['', Validators.required],
    image: '',
  });

  onSubmit(): void {
    if (this.addCarForm.valid) {
      const maxId = this.carList.getMaxId();
      const newCar: Car = {
        id: maxId,
        brand: this.addCarForm.get('brand')?.value || '',
        model: this.addCarForm.get('model')?.value || '',
        regPlate: this.addCarForm.get('regPlate')?.value || '',
        productionYear: Number(this.addCarForm.get('productionYear')?.value),
        status: 0,
        image: this.addCarForm.get('image')?.value || '',
      };

      this.carService.addCar(newCar).subscribe(
        (addedCar: Car) => {
          console.log('Car added successfully:', addedCar);
          this.router.navigate(['/cars']);
        },
        (error) => {
          console.error('Error adding car:', error);
        }
      );
    }
  }
}
