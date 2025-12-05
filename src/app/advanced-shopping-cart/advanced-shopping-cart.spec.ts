import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedShoppingCart } from './advanced-shopping-cart';

describe('AdvancedShoppingCart', () => {
  let component: AdvancedShoppingCart;
  let fixture: ComponentFixture<AdvancedShoppingCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedShoppingCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedShoppingCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
