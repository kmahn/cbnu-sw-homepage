import { Component, ElementRef, forwardRef, HostBinding, Input, OnInit, Provider, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CONTROL_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EditorComponent),
  multi: true
};

@Component({
  selector: 'cbnu-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CONTROL_ACCESSOR],
})
export class EditorComponent implements ControlValueAccessor {

  onChange: any;
  onTouched: any;
  disabled: boolean;
  value: any;

  @Input() label: string;
  @Input() readonly: boolean;
  @Input() required: boolean;
  @Input() editable = true;
  @Input() @HostBinding('style.min-height') minHeight = '50vh';
  @ViewChild('editor', { static: false }) editorRef: ElementRef;

  constructor() {
  }

  clickToolButton() {
    this.onChange(this.editorRef.nativeElement.innerHTML);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
}
