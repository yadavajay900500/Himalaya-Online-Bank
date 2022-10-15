import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachargeAndBillComponent } from './reacharge-and-bill.component';

describe('ReachargeAndBillComponent', () => {
  let component: ReachargeAndBillComponent;
  let fixture: ComponentFixture<ReachargeAndBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachargeAndBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachargeAndBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
