import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruenbergComponent } from './gruenberg.component';

describe('GruenbergComponent', () => {
  let component: GruenbergComponent;
  let fixture: ComponentFixture<GruenbergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruenbergComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruenbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
