import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackScreenComponent } from './black-screen.component';

describe('BlackScreenComponent', () => {
  let component: BlackScreenComponent;
  let fixture: ComponentFixture<BlackScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
