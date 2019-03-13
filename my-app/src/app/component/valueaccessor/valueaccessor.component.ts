import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-valueaccessor',
  templateUrl: './valueaccessor.component.html',
  styleUrls: ['./valueaccessor.component.css']
})
export class ValueaccessorComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      name: [''],
      libinput: ['']
    });
    this.formGroup.controls['libinput'].setValue('123456789');
  }

  ngOnInit() {
  }

  input() {
    this.formGroup.controls['libinput'].setValue(this.formGroup.controls['name'].value);
  }

  click() {
    this.formGroup.controls['libinput'].setValue(this.formGroup.controls['name'].value);
  }
}
