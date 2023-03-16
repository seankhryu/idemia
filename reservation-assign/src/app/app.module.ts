import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchComponent } from './search/search.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchComponent,
    ReservationDetailComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
