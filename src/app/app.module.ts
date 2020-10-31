import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewsModule } from './ng-summary/components/views/views.module';
import { ZhCommonModule } from './ng-summary/components/zh-common/zh-common.module';
import { DirectiveModule } from './ng-summary/main/directive/directive.module';

@NgModule({
  declarations: [//声明本地组件
    AppComponent
  ],
  imports: [//导入外部组件，模块
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ViewsModule,
    ZhCommonModule,
    DirectiveModule
  ],
  /*
    路由守卫的类需要放在providers中，providers自动实例化它，使得路由守卫的类起作用
    providers提供器简单粗暴的可以理解为当有模块声明这里的类的时候，它可以帮你实例化这个类，就是帮你new了这个类
    在下面的写法中其实等价于：providers：[{provide:LoginGuard,useClass:LoginGuard},{provide:LeaveGuard,useClass:LeaveGuard}]，因为token与使用的类都一样所以简化
    这里的token是标志/令牌的意思，是provide的值，当有组件声明这个token时将使用useClass的值进行实例化，因此providers的写法也可以这样写
    providers：[{provide:XXXXX,useClass:XXXXX},{provide:YYYYY,useClass:XXXXX},{provide:ZZZZZ,useClass:()=>{}}]
  */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
