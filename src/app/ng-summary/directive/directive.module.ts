import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZhDialogDirective } from './zh-dialog.directive';
import { HighLightDirective } from './high-light.directive';
import { UnLessDirective } from './un-less.directive';

@NgModule({
  declarations: [
    ZhDialogDirective,
    HighLightDirective,
    UnLessDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ZhDialogDirective,
    HighLightDirective,
    UnLessDirective
  ]
})
export class DirectiveModule { }
