import { Component, OnInit } from '@angular/core';
import { ColorListItem } from '../../../shared/ui/color-list-item/color-list-item.component';

@Component({
  selector: 'cbnu-intro-basic-education-center-page',
  templateUrl: './intro-basic-education-center-page.component.html',
  styleUrls: ['./intro-basic-education-center-page.component.scss']
})
export class IntroBasicEducationCenterPageComponent implements OnInit {

  listItems: ColorListItem[] = [
    {
      title: '<strong>청소년 등 대상 SW 교육 체험 프로그램</strong> 운영',
      list: [
        '청소년 대상 캠프 운영',
        '초등 방과 후 교실, 중등 자유학기제, 고등 SW 동아리',
        '영재 문제 해결형 프로젝트 운영',
        '특강/세미나/경진대회 등 개최',
        '고교-대학 연계 심화학습(UP)'
      ]
    },
    {
      title: '<strong>일반인 SW 교육 프로그램</strong> 운영',
      list: [
        '정보취약계층 - SW 기초교육 및 기초 자격증 교육',
        '산업체재직자 - NCS 기반의 재직자 교육',
        '중고교 교사 - 효율적인 SW 학습 교육',
        'SW Help Desk 운영'
      ]
    },
    {
      title: '<strong>개방형 온라인 SW 교과과정</strong> 운영',
      list: [
        'SW 교육에 대한 수요파악 및 운영을 위한 수요 조사',
        '충북대생을 위한 SW 기반 전문성 강화 온라인 SW 교육과정 운영'
      ]
    },
    {
      title: '<strong>SW 봉사단</strong> 운영',
      list: [
        '청소년 등 대상 SW 교육/체험 프로그램 도움이, 카드 뉴스',
        '소외된 지역 및 계층을 위한 \'찾아가는 SW 교실\' 등'
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
