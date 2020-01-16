import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../../shared/services/notice/notice.service';
import { Notice } from '../../../models/notice';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'cbnu-notice-list-page',
  templateUrl: './notice-list-page.component.html',
  styleUrls: ['./notice-list-page.component.scss']
})
export class NoticeListPageComponent implements OnInit {

  notices: Notice[] = [];

  constructor(public auth: AuthService,
              private noticeService: NoticeService) {
  }

  ngOnInit() {
    this.noticeService.getNotices().subscribe(notices => this.notices = notices);
  }

}
