import { TestBed } from '@angular/core/testing';

import { NissouService } from './nissou.service';

describe('NissouService', () => {
  let service: NissouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NissouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
