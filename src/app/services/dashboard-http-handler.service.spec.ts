import { TestBed } from '@angular/core/testing';

import { DashboardHTTPHandlerService } from './dashboard-http-handler.service';

describe('DashboardHTTPHandlerService', () => {
  let service: DashboardHTTPHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardHTTPHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
