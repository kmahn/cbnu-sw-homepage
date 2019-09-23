import { Component, OnInit } from '@angular/core';
import { ColorListItem } from '../../../shared/ui/color-list-item/color-list-item.component';

@Component({
  selector: 'cbnu-intro-major-education-center-page',
  templateUrl: './intro-major-education-center-page.component.html',
  styleUrls: ['./intro-major-education-center-page.component.scss']
})
export class IntroMajorEducationCenterPageComponent implements OnInit {

  listItems: ColorListItem[] = [
    {
      title: '<strong>교육지원 프로그램</strong> 운영',
      list: [
        'Catch-Up: 성적저조자 지원 특별강의',
        'Keep-Up: 교과목 그룹 튜터링',
        'Solve-Up: 알고리즘 학습 지원',
        '실험실습 TA 지원, 교과목 Grader 지원'
      ]
    },
    {
      title: '<strong>교과과정 개편</strong> 지원',
      list: [
        'SW실전영어',
        '오픈소스SW 이해',
        '실습, 프로젝트 교과목'
      ]
    },
    {
      title: '<strong>해외교육</strong> 지원',
      list: [
        '해외대학 공동 교육(한중일 글로벌 교육 SPIED 등)',
        '해외대학 연수(퍼듀대 등)'
      ]
    },
    {
      title: '<strong>실전적 영어교육</strong> 지원',
      list: [
        '전공교과 40% 이상 영어활용교육',
        'SW 프로젝트 영어 경진대회'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
