import { TestBed } from '@angular/core/testing';

import { FundingForceService } from './funding-force.service';

describe('FundingForceService', () => {
  let service: FundingForceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundingForceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
