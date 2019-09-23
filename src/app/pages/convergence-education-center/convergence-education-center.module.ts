import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvergenceEducationCenterRoutingModule } from './convergence-education-center-routing.module';
import { IntroConvergenceEducationCenterPageComponent } from './intro-convergence-education-center-page/intro-convergence-education-center-page.component';
import { MatIconModule, MatListModule } from '@angular/material';
import { UiModule } from '../../shared/ui/ui.module';


@NgModule({
  declarations: [IntroConvergenceEducationCenterPageComponent],
  imports: [
    CommonModule,
    ConvergenceEducationCenterRoutingModule,
    MatListModule,
    UiModule,
    MatIconModule
  ]
})
export class ConvergenceEducationCenterModule { }
