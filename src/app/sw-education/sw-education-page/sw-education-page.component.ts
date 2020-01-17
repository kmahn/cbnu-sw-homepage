import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cbnu-sw-education-page',
  templateUrl: './sw-education-page.component.html',
  styleUrls: ['./sw-education-page.component.scss']
})
export class SwEducationPageComponent implements OnInit {

  menus = [
    { name: 'EASY 코스', link: '/sw-edu/easy' }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
