import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportarrivalComponent } from './airportarrival.component';

describe('AirportarrivalComponent', () => {
  let component: AirportarrivalComponent;
  let fixture: ComponentFixture<AirportarrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportarrivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportarrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
