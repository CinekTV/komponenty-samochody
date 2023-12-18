import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../types/car';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private apiUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getCar(carId: number): Observable<Car> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.get<Car>(url);
  }

  addCar(newCar: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, newCar);
  }

  updateCar(updatedCar: Car): Observable<Car> {
    const url = `${this.apiUrl}/${updatedCar.id}`;
    return this.http.put<Car>(url, updatedCar);
  }

  deleteCar(carId: number): Observable<void> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.delete<void>(url);
  }
}
