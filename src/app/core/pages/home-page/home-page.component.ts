import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../../shared/services/notice/notice.service';
import { Notice } from '../../../models/notice';

@Component({
  selector: 'cbnu-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NoticeService]
})
export class HomePageComponent implements OnInit {

  notices: Notice[] = [];

  constructor(private noticeService: NoticeService) {
  }

  ngOnInit() {
  }

}
