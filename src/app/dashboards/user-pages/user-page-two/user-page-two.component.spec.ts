import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageTwoComponent } from './user-page-two.component';

describe('UserPageTwoComponent', () => {
  let component: UserPageTwoComponent;
  let fixture: ComponentFixture<UserPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
