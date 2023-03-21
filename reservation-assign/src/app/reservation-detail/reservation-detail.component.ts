import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<ReservationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public reservation: Reservation
  ) { 
    
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
