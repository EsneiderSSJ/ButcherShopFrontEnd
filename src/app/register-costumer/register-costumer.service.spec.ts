import { TestBed } from '@angular/core/testing';

import { RegisterCostumerService } from './register-costumer.service';

describe('RegisterCostumerService', () => {
  let service: RegisterCostumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCostumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
