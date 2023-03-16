import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  reservations: Reservation[] = [];
  filteredReservations: Reservation[] = [];
  searchText: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      streetName: '',
      streetNumber: '',
      city: '',
      state: '',
      zipCode: ''
    }
  };

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
      this.filteredReservations = reservations;
    });
  }

  onSubmit(): void {
    console.log("searchText.firstName="+this.searchText.firstName);
    this.filteredReservations = this.reservations.filter(reservation => {
      // Check if any of the reservation's properties contain the search text
      return Object.values(reservation).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(this.searchText.firstName.toLowerCase()) &&
             value.toLowerCase().includes(this.searchText.lastName.toLowerCase()) &&
             value.toLowerCase().includes(this.searchText.email.toLowerCase()) &&
             value.toLowerCase().includes(this.searchText.phone.toLowerCase());
        }
        return false;
      });
    });
    console.log("reservation.filteredReservations="+this.filteredReservations.length);
  }
  search(): void {
    this.filteredReservations = this.reservations.filter(reservation =>
      reservation.firstName.toLowerCase().includes(this.searchText.toLowerCase())
      || reservation.lastName.toLowerCase().includes(this.searchText.toLowerCase())
      || reservation.email.toLowerCase().includes(this.searchText.toLowerCase())
      || reservation.phone.toLowerCase().includes(this.searchText.toLowerCase())
      || reservation.note.toLowerCase().includes(this.searchText.toLowerCase())
      || reservation.tags.some(tag => tag.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }
}
