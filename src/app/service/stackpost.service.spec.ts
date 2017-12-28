import { TestBed, inject } from '@angular/core/testing';

import { StackpostService } from './stackpost.service';

describe('StackpostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StackpostService]
    });
  });

  it('should be created', inject([StackpostService], (service: StackpostService) => {
    expect(service).toBeTruthy();
  }));
});
