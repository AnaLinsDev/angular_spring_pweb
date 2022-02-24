import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesListComponent } from './restaurantes-list.component';

describe('RestaurantesListComponent', () => {
  let component: RestaurantesListComponent;
  let fixture: ComponentFixture<RestaurantesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
