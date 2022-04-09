import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatestampComponent } from './datestamp.component';

describe('DatestampComponent', () => {
  let component: DatestampComponent;
  let fixture: ComponentFixture<DatestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatestampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
