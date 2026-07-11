import { TestBed } from '@angular/core/testing';

import { CvServices } from './cv-services';

describe('CvServices', () => {
  let service: CvServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
