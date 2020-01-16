import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFormsRoutingModule } from './app-forms-routing.module';
import { AppFormsListPageComponent } from './app-forms-list-page/app-forms-list-page.component';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCheckboxModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule, MatRadioModule,
  MatSelectModule, MatSlideToggleModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireListComponent } from './components/questionnaire-list/questionnaire-list.component';
import { AppFormsListComponent } from './components/app-forms-list/app-forms-list.component';
import { AppFormsService } from './services/app-forms/app-forms.service';
import { AppFormsEditPageComponent } from './app-forms-edit-page/app-forms-edit-page.component';
import { AppFormsSectionComponent } from './components/app-forms-section/app-forms-section.component';
import { SectionFormComponent } from './components/section-form/section-form.component';
import { QuestionnaireSubmitPageComponent } from './questionnaire-submit-page/questionnaire-submit-page.component';
import { UiModule } from '../../shared/ui/ui.module';
import { AppFormControlComponent } from './components/app-form-control/app-form-control.component';


@NgModule({
  declarations: [AppFormsListPageComponent, QuestionnaireListComponent, AppFormsListComponent, AppFormsEditPageComponent, AppFormsSectionComponent, SectionFormComponent, QuestionnaireSubmitPageComponent, AppFormControlComponent],
  imports: [
    CommonModule,
    AppFormsRoutingModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    UiModule,
    MatCheckboxModule,
  ],
  providers: [
    AppFormsService
  ]
})
export class AppFormsModule { }
