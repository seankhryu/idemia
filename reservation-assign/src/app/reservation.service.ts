import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = '../../assets/reservations.json';
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {
    this.loadReservations();
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl);
  }
  private loadReservations(): void {
    this.http.get<Reservation[]>(this.apiUrl)
      .subscribe((reservations: Reservation[]) => {
        this.reservations = reservations.slice(0, 2);
      });
  }
  searchReservations(term: string): Reservation[] {
    if (!term.trim()) {
      return this.reservations;
    }
    return this.reservations.filter((reservation: Reservation) => {
      const searchFields: string[] = [
        reservation.firstName,
        reservation.lastName,
        reservation.email,
        reservation.phone,
        reservation.note,
        ...reservation.extras,
        ...reservation.tags
      ];
      return searchFields.some((field: string) =>
        field.toLowerCase().includes(term.toLowerCase())
      );
    });
  }
}