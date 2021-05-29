import { TestBed } from '@angular/core/testing';

import { SliderOptionsService } from './slider-options.service';

describe('SliderOptionsService', () => {
  let service: SliderOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
