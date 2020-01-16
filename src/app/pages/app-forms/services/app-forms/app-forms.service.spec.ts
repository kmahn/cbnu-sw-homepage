import { TestBed } from '@angular/core/testing';

import { AppFormsService } from './app-forms.service';

describe('AppFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppFormsService = TestBed.get(AppFormsService);
    expect(service).toBeTruthy();
  });
});
