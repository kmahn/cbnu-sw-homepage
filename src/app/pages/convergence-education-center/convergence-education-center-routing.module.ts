import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  IntroConvergenceEducationCenterPageComponent
} from './intro-convergence-education-center-page/intro-convergence-education-center-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/convergence/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroConvergenceEducationCenterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvergenceEducationCenterRoutingModule {
}
