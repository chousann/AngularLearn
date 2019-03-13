import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MylibComponent } from './mylib.component';
import { FormComponent } from './component/form/form.component';

@NgModule({
  declarations: [MylibComponent, FormComponent],
  imports: [
    ReactiveFormsModule
  ],
  exports: [MylibComponent]
})
export class MylibModule { }
