import { TestBed } from '@angular/core/testing';

import { DepServicesService } from './dep-services.service';

describe('DepServicesService', () => {
  let service: DepServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
