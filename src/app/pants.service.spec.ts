import { TestBed } from '@angular/core/testing';

import { PantsService } from './pants.service';

describe('PantsService', () => {
  let service: PantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
