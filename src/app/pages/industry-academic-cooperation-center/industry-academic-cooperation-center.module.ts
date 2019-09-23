import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryAcademicCooperationCenterRoutingModule } from './industry-academic-cooperation-center-routing.module';
import {
  IntroIndustryAcademicCooperationCenterPageComponent
} from './intro-industry-academic-cooperation-center-page/intro-industry-academic-cooperation-center-page.component';
import { UiModule } from '../../shared/ui/ui.module';
import { MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [IntroIndustryAcademicCooperationCenterPageComponent],
  imports: [
    CommonModule,
    IndustryAcademicCooperationCenterRoutingModule,
    UiModule,
    MatListModule,
    MatIconModule,
  ]
})
export class IndustryAcademicCooperationCenterModule {
}
