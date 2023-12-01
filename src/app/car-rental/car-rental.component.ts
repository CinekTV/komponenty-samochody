// car-rental.component.ts
import { Component, OnInit } from '@angular/core';

interface Rental {
  userId: number;
  carId: number;
  startDate: Date;
  endDate: Date;
  kmCount?: number;
}

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {
  rentals: Rental[] = [];
  sortedRentals: Rental[] = [];
  sortBy: keyof Rental = 'startDate'; // Domyślne sortowanie

  constructor() { }

  ngOnInit(): void {
    // Tutaj możesz wczytać dane wypożyczeń z serwera lub innego źródła danych
    this.loadRentals();
  }

  loadRentals() {
    // Symulacja danych - Możesz zastąpić tym rzeczywistymi danymi
    this.rentals = [
      { userId: 1, carId: 101, startDate: new Date('2023-01-01'), endDate: new Date('2023-01-10'), kmCount: 500 },
      { userId: 2, carId: 102, startDate: new Date('2023-02-01'), endDate: new Date('2023-02-15'), kmCount: 700 },
      // Dodaj więcej wypożyczeń
    ];

    // Przy każdym załadowaniu danych, sortuj i zaktualizuj widok
    this.sortRentals();
  }

  sortRentals() {
    // Klonujemy tablicę przed sortowaniem, aby nie modyfikować oryginalnej
    this.sortedRentals = [...this.rentals];

    // Sortowanie według wybranej kolumny
    this.sortedRentals.sort((a, b) => {
      const aValue = a[this.sortBy] as number | string | Date;
      const bValue = b[this.sortBy] as number | string | Date;

      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });
  }

  setSortBy(column: keyof Rental) {
    // Ustawia kolumnę do sortowania i ponownie sortuje dane
    this.sortBy = column;
    this.sortRentals();
  }
}

export class CarRentalModule {}
