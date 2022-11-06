import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdkDragDropComponent } from './cdk-drag-drop/cdk-drag-drop.component';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';
import { PdfComponent } from './pdf/pdf.component';
import { SkillComponent } from './skill.component';


const routes: Routes = [
  {
    path: '',
    component: SkillComponent,
    children: [
      { path: 'pdf', component: PdfComponent },
      { path: 'drag-drop', component: CdkDragDropComponent },
      { path: 'overlay', component: CdkOverlayComponent },
      { path: '', redirectTo: 'pdf', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
