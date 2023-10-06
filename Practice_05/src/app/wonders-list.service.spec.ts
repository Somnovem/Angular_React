import { TestBed } from '@angular/core/testing';

import { WondersListService } from './wonders-list.service';

describe('WondersListService', () => {
  let service: WondersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WondersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
