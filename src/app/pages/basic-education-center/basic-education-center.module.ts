import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicEducationCenterRoutingModule } from './basic-education-center-routing.module';
import { IntroBasicEducationCenterPageComponent } from './intro-basic-education-center-page/intro-basic-education-center-page.component';
import { UiModule } from '../../shared/ui/ui.module';
import { MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [IntroBasicEducationCenterPageComponent],
  imports: [
    CommonModule,
    BasicEducationCenterRoutingModule,
    UiModule,
    MatListModule,
    MatIconModule
  ]
})
export class BasicEducationCenterModule { }
