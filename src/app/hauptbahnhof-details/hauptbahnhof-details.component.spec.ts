import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauptbahnhofDetailsComponent } from './hauptbahnhof-details.component';

describe('HauptbahnhofDetailsComponent', () => {
  let component: HauptbahnhofDetailsComponent;
  let fixture: ComponentFixture<HauptbahnhofDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauptbahnhofDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HauptbahnhofDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
