import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLoanApplicationComponent } from './apply-loan-application.component';

describe('ApplyLoanApplicationComponent', () => {
  let component: ApplyLoanApplicationComponent;
  let fixture: ComponentFixture<ApplyLoanApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyLoanApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyLoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
