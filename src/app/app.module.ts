import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterExample } from './ng-summary/views/router/router-example.component';
import { RouterChild } from './ng-summary/views/router/router-child/router-child.component';
import { RouterChild2 } from './ng-summary/views/router/router-child2/router-child2.component';
import { RouterChild3 } from './ng-summary/views/router/router-child3/router-child3.component';
import { RouterChild4 } from './ng-summary/views/router/router-child4/router-child4.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeExampleComponent } from './ng-summary/views/pipe-example/pipe-example.component';
import { UploadComponent } from './ng-summary/views/upload/upload.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { ParentComponent } from './ng-summary/views/component-message/parent/parent.component';
import { ChildrenComponent } from './ng-summary/views/component-message/children/children.component';
import { CommonDocsComponent } from './ng-summary/views/common-docs/common-docs.component';
import { AnimationsComponent } from './ng-summary/views/animations/animations.component';
import { DynamicFromComponent } from './ng-summary/views/from/dynamic-from/dynamic-from.component';
import { ReactiveFromComponent } from './ng-summary/views/from/reactive-from/reactive-from.component';
import { FromComponent } from './ng-summary/views/from/from.component';
import { DynamicComponent } from './ng-summary/views/dynamic-component/dynamic.component';
import { DynamicInstanceComponent } from './ng-summary/views/dynamic-component/dynamic-instance/dynamic-instance.component';
import { MainContainerComponent } from './ng-summary/views/main-container/main-container.component';
import { MyUperCasePipe } from './ng-summary/pipe/my-uper-case.pipe';
import { HighLightDirective } from './ng-summary/directive/high-light.directive';
import { UnLessDirective } from './ng-summary/directive/un-less.directive';
import { ZhDialogDirective } from './ng-summary/directive/zh-dialog.directive';
import { LoginGuard } from './ng-summary/guard/login-guard';
import { LeaveGuard } from './ng-summary/guard/leave-guard';
import { ViewsModule } from './ng-summary/views/views.module';
import { ZhCommonModule } from './ng-summary/zh-common/zh-common.module';

@NgModule({
  declarations: [//声明本地组件
    AppComponent
  ],
  imports: [//导入外部组件，模块
    BrowserModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    // FormsModule,//使用ngmodel指令时，必须导入这个模块，否则报错
    //HttpClient,//如果要使用httpclient模块与服务器进行通讯，则这个模块需要手动导入，否则在服务模块没有相应的智能提示
    // HttpClientModule,
    // CommonModule,
    // FileUploadModule,
    // ReactiveFormsModule,
    ViewsModule,
    ZhCommonModule
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
  // entryComponents: [DynamicInstanceComponent]
})
export class AppModule { }
