import { TestBed } from '@angular/core/testing';

import { FitsService } from './fits.service';

describe('FitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FitsService = TestBed.get(FitsService);
    expect(service).toBeTruthy();
  });
});
