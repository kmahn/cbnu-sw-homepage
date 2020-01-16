import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle/typings/slide-toggle';
import { AppFormsService } from '../services/app-forms/app-forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cbnu-app-forms-edit-page',
  templateUrl: './app-forms-edit-page.component.html',
  styleUrls: ['./app-forms-edit-page.component.scss']
})
export class AppFormsEditPageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private appFormsService: AppFormsService) {
    this.formGroup = this.fb.group({
      _id: [null],
      title: [null, [Validators.required]],
      sections: this.fb.array([this.createSection()]),
      open: [false],
    });
  }

  get sections(): FormArray {
    return this.formGroup.get('sections') as FormArray;
  }

  addSection() {
    this.sections.controls.push(this.createSection());
  }

  removeSection(index: number) {
    this.sections.removeAt(index);
  }

  changeOpen(event: MatSlideToggleChange) {
    this.formGroup.get('open').setValue(event.checked);
  }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }
    const forms = this.formGroup.getRawValue();

    this.appFormsService.createForm(forms).subscribe(() => {
      this.router.navigate(['/forms', 'list']);
    });
  }

  private createSection(): FormGroup {
    return this.fb.group({
      title: [null, [Validators.required]],
      forms: this.fb.array([this.createQuestion()])
    });
  }

  private createQuestion(): FormGroup {
    return this.fb.group({
      label: [null, [Validators.required]],
      description: [null],
      type: ['single-line'],
      options: this.fb.array([]),
      required: [false],
    });
  }

  ngOnInit() {
  }

}
