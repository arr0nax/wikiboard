import { TestBed, inject } from '@angular/core/testing';

import { GetVideoService } from './get-video.service';

describe('GetVideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetVideoService]
    });
  });

  it('should ...', inject([GetVideoService], (service: GetVideoService) => {
    expect(service).toBeTruthy();
  }));
});
