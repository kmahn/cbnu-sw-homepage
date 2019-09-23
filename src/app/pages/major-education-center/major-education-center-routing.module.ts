import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroMajorEducationCenterPageComponent } from './intro-major-education-center-page/intro-major-education-center-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/major/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroMajorEducationCenterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MajorEducationCenterRoutingModule {
}
