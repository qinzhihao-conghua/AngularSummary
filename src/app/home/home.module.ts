import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BilibiliSpringComponent } from './bilibili-spring/bilibili-spring.component';
import { BilibiliWinterComponent } from './bilibili-winter/bilibili-winter.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LoginComponent } from './login/login.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    MainContainerComponent,
    LoginComponent,
    BilibiliWinterComponent,
    BilibiliSpringComponent,
    LeftSidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: [
    MainContainerComponent,
    LeftSidebarComponent
  ]
})
export class HomeModule { }
