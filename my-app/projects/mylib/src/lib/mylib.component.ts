import { Component, OnInit, Input, Output, forwardRef, } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const MYLIB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MylibComponent),
  multi: true,
}
@Component({
  selector: 'lib-mylib',
  template: `
    <p>
      <input (input)="input()" [formControl]="name"/>
      <button (click)="click()">button</button>
    </p>
  `,
  styles: [],
  providers: [MYLIB_VALUE_ACCESSOR]
})
export class MylibComponent implements OnInit, ControlValueAccessor {

  name: FormControl = new FormControl('');
  constructor() { }

  ngOnInit() {
    this.OnChange(this.name.value);
  }
  handleInput() {

  }

  input() {
    this.OnChange(this.name.value);
    console.log('input');
  }

  click() {
    this.name.setValue('click');
    this.OnChange(this.name.value);
    console.log('click');
  }

  writeValue(value: any): void {
    this.name.setValue(value);
  }

  OnChange(_: any) {

  }
  registerOnChange(fn: (_: any) => void): void {
    this.OnChange = fn;
    console.log('registerOnChange');
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
  }
  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.name.disable()
    } else {
      this.name.enable();
    }
  }
}
