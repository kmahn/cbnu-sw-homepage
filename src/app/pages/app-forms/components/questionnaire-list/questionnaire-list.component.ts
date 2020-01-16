import { Component, OnInit } from '@angular/core';
import { AppFormsService } from '../../services/app-forms/app-forms.service';
import { AppForms } from '../../../../models/app-form';

@Component({
  selector: 'cbnu-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  forms: AppForms[] = [];

  constructor(private appFormsService: AppFormsService) {
  }

  getOpenAppForms() {
    this.appFormsService.getOpenForms().subscribe(forms => this.forms = forms);
  }

  ngOnInit() {
    this.getOpenAppForms();
  }

}
