import { TestBed } from '@angular/core/testing';

import { MockProviderService } from './mock-provider.service';

describe('MockProviderService', () => {
  let service: MockProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
