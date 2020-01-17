import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'cbnu-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isTop: boolean;
  menus = [
    { name: 'SW 교육', link: '/sw-edu' },
    { name: '사업단소개', link: '/intro' },
    // { name: '전공교육센터', link: '/major' },
    // { name: '기초교육센터', link: '/basic' },
    // { name: '융합교육센터', link: '/convergence' },
    // { name: '산학협력센터', link: '/cooperation' },
    // { name: 'OSS센터', link: '/oss' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  @HostListener('window:scroll') scroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isTop = window.scrollY > 116;
    }
  }

  ngOnInit() {
  }

}
