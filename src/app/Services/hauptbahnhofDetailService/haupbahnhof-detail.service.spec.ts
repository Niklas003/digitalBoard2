import { TestBed } from '@angular/core/testing';

import { HaupbahnhofDetailServiceService } from './haupbahnhof-detail.service';

describe('HaupbahnhofDetailServiceService', () => {
  let service: HaupbahnhofDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaupbahnhofDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
