import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBahnDialogComponent } from './sbahn-dialog.component';

describe('SBahnDialogComponent', () => {
  let component: SBahnDialogComponent;
  let fixture: ComponentFixture<SBahnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBahnDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SBahnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
