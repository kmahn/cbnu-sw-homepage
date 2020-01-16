import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cbnu-app-forms-section',
  templateUrl: './app-forms-section.component.html',
  styleUrls: ['./app-forms-section.component.scss']
})
export class AppFormsSectionComponent implements OnInit {

  @Input() section: AbstractControl;
  @Input() index: number;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {
  }

  get sectionGroup(): FormGroup {
    return this.section as FormGroup;
  }

  get forms(): FormArray {
    return this.section.get('forms') as FormArray;
  }

  addQuestion() {
    this.forms.push(this.createQuestion());
  }

  removeQuestion(index: number) {
    this.forms.removeAt(index);
  }

  removeSection() {
    this.remove.emit(this.index);
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
