import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadModuleRoutingModule } from './lazyload-module-routing.module';
import { AppleComponent } from './component/apple/apple.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [AppleComponent],
  imports: [
    CommonModule,
    LazyloadModuleRoutingModule,
    ShareModule
  ],
  exports: []
})
export class LazyloadModuleModule { }
