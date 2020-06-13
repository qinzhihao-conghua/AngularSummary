import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentMessageComponent } from './component-message.component';

const routes: Routes = [
  { path: '', component: ComponentMessageComponent },
  // { path: '', redirectTo: 'message-home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentMessageRoutingModule { }
