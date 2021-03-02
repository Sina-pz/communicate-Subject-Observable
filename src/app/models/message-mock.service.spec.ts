import { TestBed } from '@angular/core/testing';

import { MessageMockService } from './message-mock.service';

describe('MessageMockService', () => {
  let service: MessageMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
