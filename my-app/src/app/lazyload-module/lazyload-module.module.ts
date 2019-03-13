import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadModuleRoutingModule } from './lazyload-module-routing.module';
import { AppleComponent } from './component/apple/apple.component';

@NgModule({
  declarations: [AppleComponent],
  imports: [
    CommonModule,
    LazyloadModuleRoutingModule
  ],
  exports: [AppleComponent]
})
export class LazyloadModuleModule { }
