import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterExample } from './views/router/router-example.component';
import { RouterChild } from './views/router/router-child/router-child.component';
import { RouterChild2 } from './views/router/router-child2/router-child2.component';
import { RouterChild3 } from './views/router/router-child3/router-child3.component';
import { RouterChild4 } from './views/router/router-child4/router-child4.component';
import { LoginGuard } from './guard/login-guard';
import { LeaveGuard } from './guard/leave-guard';
import { HttpClientModule } from '@angular/common/http';
import { MyUperCasePipe } from './pipe/my-uper-case.pipe';
import { PipeExampleComponent } from './views/pipe-example/pipe-example.component';
import { UploadComponent } from './views/upload/upload.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { ParentComponent } from './views/component-message/parent/parent.component';
import { ChildrenComponent } from './views/component-message/children/children.component';
import { CommonDocsComponent } from './views/common-docs/common-docs.component';
import { HighLightDirective } from './directive/high-light.directive';
import { UnLessDirective } from './directive/un-less.directive';
import { AnimationsComponent } from './views/animations/animations.component';
import { DynamicFromComponent } from './views/from/dynamic-from/dynamic-from.component';
import { ReactiveFromComponent } from './views/from/reactive-from/reactive-from.component';
import { FromComponent } from './views/from/from.component';
import { DynamicComponent } from './views/dynamic-component/dynamic.component';
import { DynamicInstanceComponent } from './views/dynamic-component/dynamic-instance/dynamic-instance.component';
import { MainContainerComponent } from './views/main-container/main-container.component';
import { ZhDialogDirective } from './directive/zh-dialog.directive';
import { ZhAlertComponent } from './views/zh-alert/zh-alert.component';
import { ZhRadioComponent } from './views/zh-radio/zh-radio.component';
import { ZhCheckboxComponent } from './views/zh-checkbox/zh-checkbox.component';

@NgModule({
  declarations: [//声明本地组件
    AppComponent,

    CommonDocsComponent,
    ParentComponent,
    ChildrenComponent,
    RouterExample,
    RouterChild,
    RouterChild2,
    RouterChild3,
    RouterChild4,
    PipeExampleComponent,
    MyUperCasePipe,
    UploadComponent,
    HighLightDirective,
    UnLessDirective,
    AnimationsComponent,
    DynamicFromComponent,
    ReactiveFromComponent,
    FromComponent,
    DynamicComponent,
    DynamicInstanceComponent,
    MainContainerComponent,
    ZhDialogDirective,
    ZhAlertComponent,
    ZhRadioComponent,
    ZhCheckboxComponent
  ],
  imports: [//导入外部组件，模块
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,//使用ngmodel指令时，必须导入这个模块，否则报错
    //HttpClient,//如果要使用httpclient模块与服务器进行通讯，则这个模块需要手动导入，否则在服务模块没有相应的智能提示
    HttpClientModule,
    CommonModule,
    FileUploadModule,
    ReactiveFormsModule
  ],
  /*
    路由守卫的类需要放在providers中，providers自动实例化它，使得路由守卫的类起作用
    providers提供器简单粗暴的可以理解为当有模块声明这里的类的时候，它可以帮你实例化这个类，就是帮你new了这个类
    在下面的写法中其实等价于：providers：[{provide:LoginGuard,useClass:LoginGuard},{provide:LeaveGuard,useClass:LeaveGuard}]，因为token与使用的类都一样所以简化
    这里的token是标志/令牌的意思，是provide的值，当有组件声明这个token时将使用useClass的值进行实例化，因此providers的写法也可以这样写
    providers：[{provide:XXXXX,useClass:XXXXX},{provide:YYYYY,useClass:XXXXX},{provide:ZZZZZ,useClass:()=>{}}]
  */
  providers: [LoginGuard, LeaveGuard],
  bootstrap: [AppComponent],
  entryComponents: [DynamicInstanceComponent, ZhAlertComponent]
})
export class AppModule { }
