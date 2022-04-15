import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectStatusComponent } from './detect-status.component';

describe('DetectStatusComponent', () => {
  let component: DetectStatusComponent;
  let fixture: ComponentFixture<DetectStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
