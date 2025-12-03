import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileLoader } from './user-profile-loader';

describe('UserProfileLoader', () => {
  let component: UserProfileLoader;
  let fixture: ComponentFixture<UserProfileLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
