import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MajorEducationCenterRoutingModule } from './major-education-center-routing.module';
import { IntroMajorEducationCenterPageComponent } from './intro-major-education-center-page/intro-major-education-center-page.component';
import { UiModule } from '../../shared/ui/ui.module';
import { MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [IntroMajorEducationCenterPageComponent],
  imports: [
    CommonModule,
    MajorEducationCenterRoutingModule,
    UiModule,
    MatListModule,
    MatIconModule
  ]
})
export class MajorEducationCenterModule { }
