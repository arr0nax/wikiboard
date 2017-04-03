import { TestBed, inject } from '@angular/core/testing';

import { GetFireService } from './get-fire.service';

describe('GetFireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFireService]
    });
  });

  it('should ...', inject([GetFireService], (service: GetFireService) => {
    expect(service).toBeTruthy();
  }));
});
