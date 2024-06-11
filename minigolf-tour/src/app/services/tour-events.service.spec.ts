import { TestBed } from '@angular/core/testing';

import { TourEventsService } from './tour-events.service';

describe('TourEventsService', () => {
  let service: TourEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
