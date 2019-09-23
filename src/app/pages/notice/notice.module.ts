import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeListPageComponent } from './notice-list-page/notice-list-page.component';
import { NoticeDetailPageComponent } from './notice-detail-page/notice-detail-page.component';
import { NoticeService } from '../../shared/services/notice/notice.service';
import { MatButtonModule, MatListModule } from '@angular/material';
import { NoticeFormPageComponent } from './notice-form-page/notice-form-page.component';


@NgModule({
  declarations: [
    NoticeListPageComponent,
    NoticeDetailPageComponent,
    NoticeFormPageComponent,
  ],
  imports: [
    CommonModule,
    NoticeRoutingModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [NoticeService]
})
export class NoticeModule {
}
