import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentMessageRoutingModule } from './component-message-routing.module';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Children1Component } from './children1/children1.component';
import { Children2Component } from './children2/children2.component';
import { ComponentMessageComponent } from './component-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponentMessageComponent,
    Parent1Component,
    Parent2Component,
    Children1Component,
    Children2Component
  ],
  imports: [
    CommonModule,
    ComponentMessageRoutingModule,
    FormsModule
  ]
})
export class ComponentMessageModule { }
