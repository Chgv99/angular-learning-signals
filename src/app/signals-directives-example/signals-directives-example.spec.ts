import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsDirectivesExample } from './signals-directives-example';

describe('SignalsDirectivesExample', () => {
  let component: SignalsDirectivesExample;
  let fixture: ComponentFixture<SignalsDirectivesExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsDirectivesExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsDirectivesExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
