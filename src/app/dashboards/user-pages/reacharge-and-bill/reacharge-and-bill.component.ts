import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reacharge-and-bill',
  templateUrl: './reacharge-and-bill.component.html',
  styleUrls: ['./reacharge-and-bill.component.scss']
})
export class ReachargeAndBillComponent implements OnInit {
  title:string="Prepaid Mobile Recharge"
  mobileReacharge: boolean = true;
  DTH: boolean = false;
  electricity: boolean = false;
  creditCard: boolean = false;
  insurence: boolean = false
  gasbill: boolean = false
  constructor() { }
  name = new FormControl('');
  ngOnInit(): void {
  }
  mobileReach() {
  this.title="Prepaid Mobile Recharge"
    this.mobileReacharge = true
    this.DTH = false
    this.electricity = false
    this.creditCard = false
    this.insurence = false
    this.gasbill = false

  }
  DTH_Reacharge() {
    this.title="DTH recharge"
    this.DTH = true
    this.mobileReacharge = false
    this.electricity = false
    this.creditCard = false
    this.insurence = false
    this.gasbill = false

  }
  ElectricityReacharge() {
    this.title="Electricity Bill Payment"
    this.electricity = true
    this.DTH = false
    this.mobileReacharge = false
    this.creditCard = false
    this.insurence = false
    this.gasbill = false

  }
  CreditCardreacharge() {
    this.creditCard = true
    this.title="Credit Crad Bill Payment"
    this.electricity = false
    this.DTH = false
    this.mobileReacharge = false
    this.insurence = false
    this.gasbill = false

  }
  InsurenceBill() {
    this.title="Life Insurence Premium Payment Online"
    this.insurence = true

    this.creditCard = false
    this.electricity = false
    this.DTH = false
    this.mobileReacharge = false
    this.gasbill = false

  }
  GasBill() {
    this.title="Gas Bill Payment Bill"
    this.gasbill = true
    this.insurence = false
    this.creditCard = false
    this.electricity = false
    this.DTH = false
    this.mobileReacharge = false
  }
}
