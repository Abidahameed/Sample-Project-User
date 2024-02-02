import { TestBed } from '@angular/core/testing';

import { JeeansService } from './jeeans.service';

describe('JeeansService', () => {
  let service: JeeansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeeansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
