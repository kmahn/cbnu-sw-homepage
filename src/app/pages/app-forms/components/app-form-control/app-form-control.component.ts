import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppForm } from '../../../../models/app-form';
import { MatCheckboxChange } from '@angular/material';

const CONTROL_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AppFormControlComponent),
  multi: true
};

@Component({
  selector: 'cbnu-app-form-control',
  templateUrl: './app-form-control.component.html',
  styleUrls: ['./app-form-control.component.scss'],
  providers: [CONTROL_ACCESSOR]
})
export class AppFormControlComponent implements ControlValueAccessor, OnInit {
  onChange: any;
  onTouched: any;
  value: any;
  checkedValues: string[];
  @Input() form: AppForm;

  constructor() {
  }

  changeValue(value) {
    this.onChange(value);
  }

  changeCheckedValue(event: MatCheckboxChange, option: string) {
    if (!event.checked) {
      const index = this.checkedValues.indexOf(option);
      if (index !== -1) {
        this.checkedValues.splice(index, 1);
      }
    } else if (!this.checkedValues.includes(option)) {
      this.checkedValues.push(option);
    }
    this.checkedValues.sort();
    this.onChange(this.checkedValues);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  ngOnInit(): void {
    if (this.form.type === 'checkbox') {
      this.checkedValues = [];
    }
  }
}
