import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwEducationRoutingModule } from './sw-education-routing.module';
import { SwEducationPageComponent } from './sw-education-page/sw-education-page.component';
import { EasyCoursePageComponent } from './pages/easy-course-page/easy-course-page.component';
import { UiModule } from '../shared/ui/ui.module';


@NgModule({
  declarations: [SwEducationPageComponent, EasyCoursePageComponent],
  imports: [
    CommonModule,
    SwEducationRoutingModule,
    UiModule,
  ]
})
export class SwEducationModule { }
