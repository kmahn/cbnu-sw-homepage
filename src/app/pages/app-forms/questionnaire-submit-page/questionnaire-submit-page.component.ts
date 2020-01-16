import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppFormsService } from '../services/app-forms/app-forms.service';
import { map, switchMap } from 'rxjs/operators';
import { AppForms, Section } from '../../../models/app-form';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cbnu-questionnaire-submit-page',
  templateUrl: './questionnaire-submit-page.component.html',
  styleUrls: ['./questionnaire-submit-page.component.scss']
})
export class QuestionnaireSubmitPageComponent implements OnInit {

  form: AppForms;
  subscriptions: Subscription[] = [];
  formGroup: FormGroup;
  invalid: boolean;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private appFormsService: AppFormsService) {
  }

  get contents(): FormArray {
    return this.formGroup.get('contents') as FormArray;
  }

  initFormGroup(form: AppForms) {
    this.form = form;
    this.formGroup = this.fb.group({
      contents: this.fb.array(form.sections.map(s => this.createSectionGroup(s))),
    });
  }

  getContentGroup(index: number): FormGroup {
    return this.contents.controls[index] as FormGroup;
  }

  submit() {
    this.invalid = this.formGroup.invalid;
    if (this.invalid) {
      return;
    }
    const questionnaire = this.formGroup.getRawValue();
    this.appFormsService.submitQuestionnaire(this.form._id, questionnaire)
      .subscribe(() => this.router.navigate(['/forms', 'list']));
  }

  private createSectionGroup(section: Section): FormGroup {
    const group = this.fb.group({});

    section.forms.filter(f => f.type !== 'description').forEach((form, i) => {
      form.index = String(i);
      let control: AbstractControl;
      if (form.required) {
        control = this.fb.control(null, [Validators.required]);
      } else {
        control = this.fb.control(null);
      }
      group.addControl(String(i), control);
    });


    return group;
  }

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.pipe(
        map(params => params.id),
        switchMap(id => this.appFormsService.getForm(id))
      ).subscribe(form => this.initFormGroup(form))
    );
  }

}
