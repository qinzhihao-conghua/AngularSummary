import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterExampleRoutingModule } from './router-example-routing.module';
import { RouterExample } from './router-example.component';
import { RouterChild } from './router-child/router-child.component';
import { RouterChild2 } from './router-child2/router-child2.component';
import { RouterChild3 } from './router-child3/router-child3.component';
import { RouterChild4 } from './router-child4/router-child4.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from 'src/app/main/guard/login-guard';
import { LeaveGuard } from 'src/app/main/guard/leave-guard';

@NgModule({
  declarations: [
    RouterExample,
    RouterChild,
    RouterChild2,
    RouterChild3,
    RouterChild4,
  ],
  imports: [
    CommonModule,
    RouterExampleRoutingModule,
    FormsModule
  ],
  providers: [LoginGuard, LeaveGuard],
})
export class RouterExampleModule { }
