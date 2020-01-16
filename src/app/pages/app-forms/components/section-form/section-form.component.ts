import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange, MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'cbnu-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.scss']
})
export class SectionFormComponent implements OnInit {

  @Input() question: AbstractControl;
  @Input() index: number;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  typeOptions = [
    { viewValue: '짧은 답변', value: 'single-line' },
    { viewValue: '긴 답변', value: 'multi-line' },
    { viewValue: '단일선택', value: 'radio' },
    { viewValue: '중복선택', value: 'checkbox' },
    { viewValue: '설명글', value: 'description' },
  ];

  constructor() {
  }

  get questionGroup(): FormGroup {
    return this.question as FormGroup;
  }

  get type(): string {
    return this.question.get('type').value;
  }

  get options(): FormArray {
    return this.question.get('options') as FormArray;
  }

  changeType(event: MatSelectChange) {
    if (!['radio', 'checkbox'].includes(event.value)) {
      this.options.clear();
    } else if (this.options.controls.length === 0) {
      this.options.push(this.createOption());
    }
  }

  changeRequired(event: MatSlideToggleChange) {
    this.questionGroup.get('required').setValue(event.checked);
  }

  addOption() {
    this.options.push(this.createOption());
  }

  getOptionControl(index: number): FormControl {
    return this.options.controls[index] as FormControl;
  }

  removeQuestion() {
    this.remove.emit(this.index);
  }

  private createOption(): FormControl {
    return new FormControl(`option ${this.options.controls.length + 1}`);
  }

  ngOnInit() {
  }

}
