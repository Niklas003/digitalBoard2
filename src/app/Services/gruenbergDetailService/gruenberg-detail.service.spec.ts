import { TestBed } from '@angular/core/testing';

import { GruenbergDetailService } from './gruenberg-detail.service';

describe('GruenbergDetailService', () => {
  let service: GruenbergDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruenbergDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
