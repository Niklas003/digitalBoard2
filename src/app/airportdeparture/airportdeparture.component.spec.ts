import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportdepartureComponent } from './airportdeparture.component';

describe('AirportdepartureComponent', () => {
  let component: AirportdepartureComponent;
  let fixture: ComponentFixture<AirportdepartureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportdepartureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportdepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
