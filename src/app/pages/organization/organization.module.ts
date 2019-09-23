import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { IntroOrganizationPageComponent } from './intro-organization-page/intro-organization-page.component';
import { UiModule } from '../../shared/ui/ui.module';


@NgModule({
  declarations: [
    IntroOrganizationPageComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    UiModule
  ]
})
export class OrganizationModule { }
