import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { IntroOrganizationPageComponent } from './pages/intro-organization-page/intro-organization-page.component';
import { IntroMajorEducationCenterPageComponent } from './pages/intro-major-education-center-page/intro-major-education-center-page.component';
import { IntroBasicEducationCenterPageComponent } from './pages/intro-basic-education-center-page/intro-basic-education-center-page.component';
import { IntroConvergenceEducationCenterPageComponent } from './pages/intro-convergence-education-center-page/intro-convergence-education-center-page.component';
import { IntroIndustryAcademicCooperationCenterPageComponent } from './pages/intro-industry-academic-cooperation-center-page/intro-industry-academic-cooperation-center-page.component';
import { IntroOssCenterPageComponent } from './pages/intro-oss-center-page/intro-oss-center-page.component';


const routes: Routes = [
  {
    path: '', component: IntroPageComponent, children: [
      { path: '', redirectTo: '/intro/sw', pathMatch: 'full' },
      { path: 'sw', component: IntroOrganizationPageComponent },
      { path: 'major', component: IntroMajorEducationCenterPageComponent },
      { path: 'basic', component: IntroBasicEducationCenterPageComponent },
      { path: 'convergence', component: IntroConvergenceEducationCenterPageComponent },
      { path: 'industry', component: IntroIndustryAcademicCooperationCenterPageComponent },
      { path: 'oss', component: IntroOssCenterPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule {
}
