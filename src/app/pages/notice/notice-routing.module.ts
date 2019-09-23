import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeDetailPageComponent } from './notice-detail-page/notice-detail-page.component';
import { NoticeListPageComponent } from './notice-list-page/notice-list-page.component';
import { NoticeFormPageComponent } from './notice-form-page/notice-form-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/notice/list', pathMatch: 'full' },
  { path: 'list', component: NoticeListPageComponent },
  { path: 'edit', component: NoticeFormPageComponent },
  { path: ':id', component: NoticeDetailPageComponent },
  { path: 'edit/:id', component: NoticeFormPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule {
}
