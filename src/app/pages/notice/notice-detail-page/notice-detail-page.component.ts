import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NoticeService } from '../../../shared/services/notice/notice.service';
import { Notice } from '../../../models/notice';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'cbnu-notice-detail-page',
  templateUrl: './notice-detail-page.component.html',
  styleUrls: ['./notice-detail-page.component.scss']
})
export class NoticeDetailPageComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  notice: Notice;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private noticeService: NoticeService,
              public auth: AuthService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.pipe(
        map(params => params.id),
        switchMap(id => this.noticeService.getNotice(id))
      ).subscribe(notice => this.notice = notice)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
