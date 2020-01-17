import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { MatIconModule, MatListModule } from '@angular/material';
import { UiModule } from '../shared/ui/ui.module';
import { IntroOrganizationPageComponent } from './pages/intro-organization-page/intro-organization-page.component';
import { IntroMajorEducationCenterPageComponent } from './pages/intro-major-education-center-page/intro-major-education-center-page.component';
import { IntroBasicEducationCenterPageComponent } from './pages/intro-basic-education-center-page/intro-basic-education-center-page.component';
import { IntroConvergenceEducationCenterPageComponent } from './pages/intro-convergence-education-center-page/intro-convergence-education-center-page.component';
import { IntroIndustryAcademicCooperationCenterPageComponent } from './pages/intro-industry-academic-cooperation-center-page/intro-industry-academic-cooperation-center-page.component';
import { IntroOssCenterPageComponent } from './pages/intro-oss-center-page/intro-oss-center-page.component';


@NgModule({
  declarations: [
    IntroPageComponent,
    IntroOrganizationPageComponent,
    IntroMajorEducationCenterPageComponent,
    IntroBasicEducationCenterPageComponent,
    IntroConvergenceEducationCenterPageComponent,
    IntroIndustryAcademicCooperationCenterPageComponent,
    IntroOssCenterPageComponent,
  ],
  imports: [
    CommonModule,
    IntroRoutingModule,
    MatListModule,
    MatIconModule,
    UiModule,
  ]
})
export class IntroModule {
}
