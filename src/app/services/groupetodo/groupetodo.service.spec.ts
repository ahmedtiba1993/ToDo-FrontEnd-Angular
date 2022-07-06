/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GroupetodoService } from './groupetodo.service';

describe('Service: Groupetodo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupetodoService]
    });
  });

  it('should ...', inject([GroupetodoService], (service: GroupetodoService) => {
    expect(service).toBeTruthy();
  }));
});
