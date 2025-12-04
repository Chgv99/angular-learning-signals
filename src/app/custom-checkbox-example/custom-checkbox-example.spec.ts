import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckboxExample } from './custom-checkbox-example';

describe('CustomCheckboxExample', () => {
  let component: CustomCheckboxExample;
  let fixture: ComponentFixture<CustomCheckboxExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCheckboxExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCheckboxExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
