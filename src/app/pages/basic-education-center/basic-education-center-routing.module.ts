import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroBasicEducationCenterPageComponent } from './intro-basic-education-center-page/intro-basic-education-center-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/basic/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroBasicEducationCenterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicEducationCenterRoutingModule {
}
