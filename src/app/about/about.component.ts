import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  btnColor:string='btn red';
  fruits:string[] = ['banana','mango','grapes','apple'];
  ngOnInit(): void {
  }

}
