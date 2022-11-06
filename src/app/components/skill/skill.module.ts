import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './skill.component';
import { HomeModule } from 'src/app/home/home.module';
import { PdfComponent } from './pdf/pdf.component';
import { OverlayDynamicComponent } from './overlay-dynamic/overlay-dynamic.component';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { CdkDragDropComponent } from './cdk-drag-drop/cdk-drag-drop.component';


@NgModule({
  declarations: [
    SkillComponent,
    PdfComponent,
    CdkDragDropComponent,
    OverlayDynamicComponent,
    CdkOverlayComponent
  ],
  imports: [
    CommonModule,
    SkillRoutingModule,
    HomeModule,
    PortalModule,
    DragDropModule,
    OverlayModule,
  ],
  providers: [{ provide: OverlayContainer, useClass: FullscreenOverlayContainer }],
  entryComponents: [
    OverlayDynamicComponent
  ]
})
export class SkillModule { }
