import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss']
})
export class TransferMoneyComponent implements OnInit {


  fontStyleControl = new FormControl('');
  fontStyle?: string;

  display:boolean = true
  show:boolean= false
  showUPI:boolean = false
  showSelf:boolean = false
  constructor() { }

  ngOnInit(): void {

  }
  bankAccount() {
    this.show = false
    this.showUPI = false
    this.showSelf = false
    this.display = true
  }

  mobileNo() {
    this.display = false
    this.showUPI = false
    this.showSelf = false
    this.show = true

  }
  toUPI_ID() {
    this.display = false
    this.show = false
    this.showSelf = false
    this.showUPI = true

  }
  selfAccount() {
    this.display = false
    this.show = false
    this.showUPI = false
    this.showSelf = true

  }
}
