import { TestBed } from '@angular/core/testing';

import { DataPathService } from './data-path.service';

describe('DataPathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPathService = TestBed.get(DataPathService);
    expect(service).toBeTruthy();
  });
});
