/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppicationGuardService } from './appication-guard.service';

describe('Service: AppicationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppicationGuardService]
    });
  });

  it('should ...', inject([AppicationGuardService], (service: AppicationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
