import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerifyPageComponent } from './otp-verify-page.component';

describe('OtpVerifyPageComponent', () => {
  let component: OtpVerifyPageComponent;
  let fixture: ComponentFixture<OtpVerifyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpVerifyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpVerifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
