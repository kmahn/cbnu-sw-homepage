import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppFormsListPageComponent } from './app-forms-list-page/app-forms-list-page.component';
import { AppFormsEditPageComponent } from './app-forms-edit-page/app-forms-edit-page.component';
import { QuestionnaireSubmitPageComponent } from './questionnaire-submit-page/questionnaire-submit-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/forms/list', pathMatch: 'full' },
  { path: 'list', component: AppFormsListPageComponent },
  { path: 'edit', component: AppFormsEditPageComponent },
  { path: ':id/submit', component: QuestionnaireSubmitPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppFormsRoutingModule {
}
