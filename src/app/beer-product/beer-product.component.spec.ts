import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerProductComponent } from './beer-product.component';

describe('BeerProductComponent', () => {
  let component: BeerProductComponent;
  let fixture: ComponentFixture<BeerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
