import { Component, OnInit } from '@angular/core';
import { ColorListItem } from '../../../shared/ui/color-list-item/color-list-item.component';

@Component({
  selector: 'cbnu-intro-oss-center-page',
  templateUrl: './intro-oss-center-page.component.html',
  styleUrls: ['./intro-oss-center-page.component.scss']
})
export class IntroOssCenterPageComponent implements OnInit {

  listItems: ColorListItem[] = [
    {
      title: '<strong>오픈소스SW 실습 전용실</strong> 운영 및 관리',
      list: [
        'Smart installation',
        'Automatic/Remote configuration',
        'Open source software management'
      ]
    },
    {
      title: '<strong>가상화기반의 CBNU Git 서버</strong> 구축 및 운영',
      list: [
        '가상화 기반의 git server',
        '오픈 소스 프로젝트 코드 관리',
        '실습 테스트베드',
      ]
    },
    {
      title: '<strong>OSS 캠프 및 개발자 대회</strong> 운영',
      list: [
        '개발프로그램 경진대회',
        '오픈소스개발 특강 및 프로그램 운영',
        '오픈소스 커뮤니티 지원'
      ]
    },
    {
      title: '<strong>오픈소스SW Help Desk</strong> 지원',
      list: [
        '오픈소스 관련 Q&A',
        '오픈소스 관련 튜토리얼 제작 및 배포',
        '오픈소스 관련 컨설팅'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
