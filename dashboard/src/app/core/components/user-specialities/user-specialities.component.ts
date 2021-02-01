import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-specialities',
  templateUrl: './user-specialities.component.html',
  styleUrls: ['./user-specialities.component.css']
})
export class UserSpecialitiesComponent implements OnInit {
  @Input() userInfos:any;
  constructor() { }

  ngOnInit(): void {
  }

}