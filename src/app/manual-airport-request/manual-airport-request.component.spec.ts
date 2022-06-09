import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAirportRequestComponent } from './manual-airport-request.component';

describe('ManualAirportRequestComponent', () => {
  let component: ManualAirportRequestComponent;
  let fixture: ComponentFixture<ManualAirportRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualAirportRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualAirportRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
