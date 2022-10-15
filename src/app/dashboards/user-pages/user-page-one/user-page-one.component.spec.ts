import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageOneComponent } from './user-page-one.component';

describe('UserPageOneComponent', () => {
  let component: UserPageOneComponent;
  let fixture: ComponentFixture<UserPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
