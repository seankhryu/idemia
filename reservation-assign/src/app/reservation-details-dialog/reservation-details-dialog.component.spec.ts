import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDetailsDialogComponent } from './reservation-details-dialog.component';

describe('ReservationDetailsDialogComponent', () => {
  let component: ReservationDetailsDialogComponent;
  let fixture: ComponentFixture<ReservationDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
