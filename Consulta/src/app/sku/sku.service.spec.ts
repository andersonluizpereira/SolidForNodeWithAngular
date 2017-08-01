import { TestBed, inject } from '@angular/core/testing';

import { SkuService } from './sku.service';

describe('SkuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkuService]
    });
  });

  it('should be created', inject([SkuService], (service: SkuService) => {
    expect(service).toBeTruthy();
  }));
});
