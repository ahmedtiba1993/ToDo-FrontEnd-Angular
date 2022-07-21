/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StatistiqueService } from './statistique.service';

describe('Service: Statistique', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatistiqueService]
    });
  });

  it('should ...', inject([StatistiqueService], (service: StatistiqueService) => {
    expect(service).toBeTruthy();
  }));
});
