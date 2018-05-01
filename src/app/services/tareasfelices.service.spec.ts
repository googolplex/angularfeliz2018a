import { TestBed, inject } from '@angular/core/testing';

import { TareasfelicesService } from './tareasfelices.service';

describe('TareasfelicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareasfelicesService]
    });
  });

  it('should be created', inject([TareasfelicesService], (service: TareasfelicesService) => {
    expect(service).toBeTruthy();
  }));
});
