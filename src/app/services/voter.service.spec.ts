import { TestBed, inject } from '@angular/core/testing';

import { VoterService } from './voter.service';

describe('VoterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoterService]
    });
  });

  it('should ...', inject([VoterService], (service: VoterService) => {
    expect(service).toBeTruthy();
  }));
});
