import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../../shared/services/notice/notice.service';
import { Notice } from '../../../models/notice';

@Component({
  selector: 'cbnu-notice-list-page',
  templateUrl: './notice-list-page.component.html',
  styleUrls: ['./notice-list-page.component.scss']
})
export class NoticeListPageComponent implements OnInit {

  notices: Notice[] = [];

  constructor(private noticeService: NoticeService) {
  }

  ngOnInit() {
    this.noticeService.getNotices().subscribe(notices => this.notices = notices);
  }

}
