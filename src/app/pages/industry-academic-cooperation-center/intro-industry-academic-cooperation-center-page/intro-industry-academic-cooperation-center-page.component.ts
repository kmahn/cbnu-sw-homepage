import { Component, OnInit } from '@angular/core';
import { ColorListItem } from '../../../shared/ui/color-list-item/color-list-item.component';

@Component({
  selector: 'cbnu-intro-industry-academic-cooperation-center-page',
  templateUrl: './intro-industry-academic-cooperation-center-page.component.html',
  styleUrls: ['./intro-industry-academic-cooperation-center-page.component.scss']
})
export class IntroIndustryAcademicCooperationCenterPageComponent implements OnInit {

  listItems: ColorListItem[] = [
    {
      title: '<strong>프로젝트 교과</strong> 운영지원',
      list: [
        '저학년 프로젝트 교과 대상 Base-Up&reg; 프로그램 지원',
        '고학년 프로젝트 교과 대상 Grow-Up&reg; 프로그램 지원',
      ]
    },
    {
      title: '<strong>산학프로젝트</strong> 발굴',
      list: [
        '산학프로젝트 교과목의 주제 발굴',
        '산학공동프로젝트 발굴 및 지원',
        'Engage-Up&reg; 프로그램 운영 지원',
      ]
    },
    {
      title: '<strong>1인 1가디언 제도</strong> 운영',
      list: [
        '전주기적 현장 전문가의 학생 멘토링'
      ]
    },
    {
      title: '<strong>인턴십</strong> 지원',
      list: [
        '국내 및 해외 인턴십 발굴 및 지원'
      ]
    },
    {
      title: '<strong>創-Up 프로그램</strong> 운영',
      list: [
        '창업교과목 및 특강 운영',
        '창업자 지원 프로그램 운영'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
