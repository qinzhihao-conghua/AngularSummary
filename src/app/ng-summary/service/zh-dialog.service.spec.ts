import { TestBed } from '@angular/core/testing';

import { ZhDialogService } from './zh-dialog.service';

describe('ZhDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZhDialogService = TestBed.get(ZhDialogService);
    expect(service).toBeTruthy();
  });
});
