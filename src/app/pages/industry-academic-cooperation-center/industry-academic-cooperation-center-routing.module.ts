import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  IntroIndustryAcademicCooperationCenterPageComponent
} from './intro-industry-academic-cooperation-center-page/intro-industry-academic-cooperation-center-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/cooperation/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroIndustryAcademicCooperationCenterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryAcademicCooperationCenterRoutingModule {
}
