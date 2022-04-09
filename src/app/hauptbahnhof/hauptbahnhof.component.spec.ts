import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauptbahnhofComponent } from './hauptbahnhof.component';

describe('HauptbahnhofComponent', () => {
  let component: HauptbahnhofComponent;
  let fixture: ComponentFixture<HauptbahnhofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauptbahnhofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HauptbahnhofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
