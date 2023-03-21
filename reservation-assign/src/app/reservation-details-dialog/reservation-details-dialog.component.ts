import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Reservation } from '../reservation';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-reservation-details-dialog',
  templateUrl: './reservation-details-dialog.component.html',
  styleUrls: ['./reservation-details-dialog.component.css']
})
export class ReservationDetailsDialogComponent {
    selectedDate = new Date();
    arrivalDate: Date;
    departureDate: Date;
    roomSize: string;
    roomQuantity: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    streetName: string;
    streetNumber: string;
    zipCode: string;
    state: string;
    city: string;
    extras = new FormControl;
    extrasList: string[] = [];
    formControlObj: FormControl;
    selectedExtras: string[] | undefined;
    allExtras: string[] | undefined;
    payment: string;
    note: string;
    tagCtrl: FormControl;
    tags: string[] = [];
    filteredTags: string[] = [];
    reminder: boolean;
    newsletter: boolean;
    confirm: boolean;
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(
    public dialogRef: MatDialogRef<ReservationDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reservation
  ) {
    this.arrivalDate = new Date(data.stay.arrivalDate);
    this.departureDate = new Date(data.stay.departureDate);
    this.roomSize = data.room.roomSize;
    this.roomQuantity = data.room.roomQuantity;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.phoneNumber = data.phone;
    this.streetName = data.addressStreet.streetName;
    this.streetNumber = data.addressStreet.streetNumber;
    this.zipCode = data.addressLocation.zipCode;
    this.state = data.addressLocation.state;
    this.city = data.addressLocation.city;
    this.extrasList = data.extras;
    this.selectedExtras = this.data.extras;
    this.extras = new FormControl(this.selectedExtras);
    this.formControlObj = new FormControl(this.selectedExtras);
    this.payment = data.payment;
    this.note = data.note;
    this.tags = data.tags;
    this.filteredTags = data.tags;
    this.tagCtrl = new FormControl(this.tags);
    this.reminder = data.reminder;
    this.newsletter = data.newsletter;
    this.confirm = data.confirm;
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value.trim());
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(tag);
      return;
    }

    // Edit existing fruit
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }

  // addTag(event: any): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add tag
  //   if ((value || '').trim()) {
  //     this.tags.push(value.trim());
  //   }

  //   // Clear input
  //   if (input) {
  //     input.value = '';
  //   }
  // }
  // // Remove tag method
  // removeTag(tag: string): void {
  //   const index = this.tags.indexOf(tag);

  //   if (index >= 0) {
  //     this.tags.splice(index, 1);
  //   }
  // }


  onCancel(): void {
    this.dialogRef.close();
  }
  onSave(): void {
    // Save reservation details
    this.dialogRef.close();
  }
  compareExtraObjects(object1: any, object2: any) {
    console.log("object1="+object1);
    console.log("object2="+object2);
    return object1 && object2;
  }
  ngOnInit() {
    this.setAllExtras();
  }
  setAllExtras() {
    this.allExtras = [
      "extraBreakfast",
		  "extraTV",
		  "extraWiFi",
		  "extraParking",
		  "extraBalcony"
    ]
  }
}
