import { TestBed } from '@angular/core/testing';

import { DataInterfaceService } from './data-interface.service';

describe('DataInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataInterfaceService = TestBed.get(DataInterfaceService);
    expect(service).toBeTruthy();
  });
});
