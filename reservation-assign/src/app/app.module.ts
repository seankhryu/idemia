import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchComponent } from './search/search.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationDetailsDialogComponent } from './reservation-details-dialog/reservation-details-dialog.component';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatChipsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent },
    ])
  ],
  exports: [
    // export the imported module here
    MatChipsModule,
    // export other modules if needed
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchComponent,
    ReservationDetailComponent,
    ReservationDetailsDialogComponent
  ],
  providers: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // add the CUSTOM_ELEMENTS_SCHEMA here
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
