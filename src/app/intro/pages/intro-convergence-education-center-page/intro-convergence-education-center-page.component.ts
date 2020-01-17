import { Component, OnInit } from '@angular/core';
import { ColorListItem } from '../../../shared/ui/color-list-item/color-list-item.component';

@Component({
  selector: 'cbnu-intro-convergence-education-center-page',
  templateUrl: './intro-convergence-education-center-page.component.html',
  styleUrls: ['./intro-convergence-education-center-page.component.scss']
})
export class IntroConvergenceEducationCenterPageComponent implements OnInit {

  listItems: ColorListItem[] = [
    {
      title: '<strong>SW융합 부전공과정</strong> 신설 및 운영',
      list: [
        '전교생에게 SW융합전공 기회를 100% 보장하기 위해 신설(2020년)',
        'SW융합 부전공의 전체 교과목을 EASY 코스로 운영'
      ]
    },
    {
      title: '<strong>SW융합 연계전공과정</strong> 신설 및 운영',
      list: [
        `SW연계전공과정 운영 지원(총 9개)<br/>
<small>&nbsp;&nbsp;- 빅데이터, 보안컨설팅, 스마트 자동차, 뇌인지공학, 스마트 공공서비스(기 개설)</small><br/>
<small>&nbsp;&nbsp;- 스마트시티, 스마트팩토리, 스마트디자인, 스마트전력(2020년 신설)</small>`,
        '연계전공 이수 편의를 위해 야간에 개설되는 EASY 코스 운영',
        '연계전공 참여학생 특별장학금 지원'
      ]
    },
    {
      title: '<strong>SW융합 학생설계전공과정</strong>',
      list: [
        '학생이 스스로 설계하여 수강하는 SW융합전공',
        '설계전공 코디네이터를 통한 SW융합전공 설계 지원'
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
