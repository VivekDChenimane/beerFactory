import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFactoryComponent } from './beer-factory.component';

describe('BeerFactoryComponent', () => {
  let component: BeerFactoryComponent;
  let fixture: ComponentFixture<BeerFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
