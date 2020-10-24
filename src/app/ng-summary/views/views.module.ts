import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDocsComponent } from './common-docs/common-docs.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { MyUperCasePipe } from '../pipe/my-uper-case.pipe';
import { UploadComponent } from './upload/upload.component';
import { AnimationsComponent } from './animations/animations.component';
import { DynamicFromComponent } from './from/dynamic-from/dynamic-from.component';
import { ReactiveFromComponent } from './from/reactive-from/reactive-from.component';
import { FromComponent } from './from/from.component';
import { DynamicComponent } from './dynamic-component/dynamic.component';
import { DynamicInstanceComponent } from './dynamic-component/dynamic-instance/dynamic-instance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { ZhAlertComponent } from '../zh-common/zh-alert/zh-alert.component';
import { DirectiveModule } from '../directive/directive.module';
import { ViewsComponent } from './views.component';
import { ViewRoutingModule } from './views-common-routing.module';
import { WidthChildChildrenComponent } from './width-child-children/width-child-children.component';
import { ForViewComponent } from './width-child-children/for-view/for-view.component';
import { ZhForContentComponent } from './width-child-children/zh-for-content/zh-for-content.component';

@NgModule({
  declarations: [
    CommonDocsComponent,
    PipeExampleComponent,
    MyUperCasePipe,
    UploadComponent,
    AnimationsComponent,
    DynamicFromComponent,
    ReactiveFromComponent,
    FromComponent,
    DynamicComponent,
    DynamicInstanceComponent,
    ViewsComponent,
    WidthChildChildrenComponent,
    ForViewComponent,
    ZhForContentComponent
  ],
  imports: [
    FormsModule,//使用ngmodel指令时，必须导入这个模块，否则报错
    //HttpClient,//如果要使用httpclient模块与服务器进行通讯，则这个模块需要手动导入，否则在服务模块没有相应的智能提示
    HttpClientModule,
    CommonModule,
    FileUploadModule,
    ReactiveFormsModule,
    DirectiveModule,
    ViewRoutingModule
  ],
  exports: [
    CommonDocsComponent,
    PipeExampleComponent,
    MyUperCasePipe,
    UploadComponent,
    AnimationsComponent,
    DynamicFromComponent,
    ReactiveFromComponent,
    FromComponent,
    DynamicComponent,
    DynamicInstanceComponent,
  ],
  entryComponents: [DynamicInstanceComponent, ZhAlertComponent]
})
export class ViewsModule { }
