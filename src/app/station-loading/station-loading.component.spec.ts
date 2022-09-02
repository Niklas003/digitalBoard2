import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationLoadingComponent } from './station-loading.component';

describe('StationLoadingComponent', () => {
  let component: StationLoadingComponent;
  let fixture: ComponentFixture<StationLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
