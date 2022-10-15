import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageThreeComponent } from './user-page-three.component';

describe('UserPageThreeComponent', () => {
  let component: UserPageThreeComponent;
  let fixture: ComponentFixture<UserPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
