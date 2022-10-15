import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomerDataComponent } from './all-customer-data.component';

describe('AllCustomerDataComponent', () => {
  let component: AllCustomerDataComponent;
  let fixture: ComponentFixture<AllCustomerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCustomerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCustomerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
