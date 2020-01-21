import { TestBed, inject } from '@angular/core/testing';

import { NyNgPipesService } from './ny-ng-pipes.service';

describe('NyNgPipesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NyNgPipesService]
    });
  });

  it('should be created', inject([NyNgPipesService], (service: NyNgPipesService) => {
    expect(service).toBeTruthy();
  }));
});
