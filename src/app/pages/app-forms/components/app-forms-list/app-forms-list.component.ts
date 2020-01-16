import { Component, OnInit } from '@angular/core';
import { AppFormsService } from '../../services/app-forms/app-forms.service';
import { AppForms } from '../../../../models/app-form';

@Component({
  selector: 'cbnu-app-forms-list',
  templateUrl: './app-forms-list.component.html',
  styleUrls: ['./app-forms-list.component.scss']
})
export class AppFormsListComponent implements OnInit {
  forms: AppForms[] = [];

  constructor(private appFormsService: AppFormsService) { }

  getAppForms() {
    this.appFormsService.getMyForms().subscribe(forms => this.forms = forms);
  }

  ngOnInit() {
    this.getAppForms();
  }
}
