import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OssCenterRoutingModule } from './oss-center-routing.module';
import { IntroOssCenterPageComponent } from './intro-oss-center-page/intro-oss-center-page.component';
import { UiModule } from '../../shared/ui/ui.module';
import { MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [IntroOssCenterPageComponent],
  imports: [
    CommonModule,
    OssCenterRoutingModule,
    UiModule,
    MatListModule,
    MatIconModule
  ]
})
export class OssCenterModule { }
