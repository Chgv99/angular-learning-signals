import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartStoreExample } from './cart-store-example';

describe('CartStoreExample', () => {
  let component: CartStoreExample;
  let fixture: ComponentFixture<CartStoreExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartStoreExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartStoreExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
