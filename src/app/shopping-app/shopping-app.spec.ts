import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingApp } from './shopping-app';

describe('ShoppingApp', () => {
  let component: ShoppingApp;
  let fixture: ComponentFixture<ShoppingApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
