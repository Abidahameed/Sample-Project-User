import { TestBed } from '@angular/core/testing';

import { TopsService } from './tops.service';

describe('TopsService', () => {
  let service: TopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
