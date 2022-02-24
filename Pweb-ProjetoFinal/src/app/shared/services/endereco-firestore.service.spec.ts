import { TestBed } from '@angular/core/testing';

import { EnderecoFirestoreService } from './endereco-firestore.service';

describe('EnderecoFirestoreService', () => {
  let service: EnderecoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
