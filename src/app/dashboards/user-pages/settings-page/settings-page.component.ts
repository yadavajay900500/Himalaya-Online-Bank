import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  typesOfSetting: string[] = ['Edit Profile', 'Preference', 'Security', 'Linked Account'];
  constructor() { }

  ngOnInit(): void {
  }
  onSave(data:any){

  }
}
