import { TestBed } from '@angular/core/testing';

import { DashboardDataHandlerService } from './dashboard-data-handler.service';

describe('DashboardDataHandlerService', () => {
  let service: DashboardDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
