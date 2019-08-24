import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExampleComponent } from './views/example/example.component';
import { InputExampleComponent } from './views/input-output/input-example.component';
import { OutputComponent } from './views/input-output/out-example/out-example.component';
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

@NgModule({
  declarations: [//声明本地组件
    AppComponent,

    ExampleComponent,
    InputExampleComponent,
    OutputComponent,
    RouterExample,
    RouterChild,
    RouterChild2,
    RouterChild3,
    RouterChild4,
    PipeExampleComponent,
    MyUperCasePipe,
    UploadComponent
  ],
  imports: [//导入外部组件，模块
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,//使用ngmodel指令时，必须导入这个模块，否则报错
    //HttpClient,//如果要使用httpclient模块与服务器进行通讯，则这个模块需要手动导入，否则在服务模块没有相应的智能提示
    HttpClientModule,
    CommonModule,
    FileUploadModule
  ],
  /*
    路由守卫的类需要放在providers中，providers自动实例化它，使得路由守卫的类起作用
    providers提供器简单粗暴的可以理解为当有模块声明这里的类的时候，它可以帮你实例化这个类，就是帮你new了这个类
    在下面的写法中其实等价于：providers：[{provide:LoginGuard,useClass:LoginGuard},{provide:LeaveGuard,useClass:LeaveGuard}]，因为token与使用的类都一样所以简化
    这里的token是标志/令牌的意思，是provide的值，当有组件声明这个token时将使用useClass的值进行实例化，因此providers的写法也可以这样写
    providers：[{provide:XXXXX,useClass:XXXXX},{provide:YYYYY,useClass:XXXXX},{provide:ZZZZZ,useClass:()=>{}}]
  */
  providers: [LoginGuard, LeaveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
