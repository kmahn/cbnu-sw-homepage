import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cbnu-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  menus = [
    { name: '사업단', link: '/intro/sw' },
    { name: '전공교육센터', link: '/intro/major' },
    { name: '기초교육센터', link: '/intro/basic' },
    { name: '융합교육센터', link: '/intro/convergence' },
    { name: '산학협력센터', link: '/intro/industry' },
    { name: 'OSS센터', link: '/intro/oss' },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
