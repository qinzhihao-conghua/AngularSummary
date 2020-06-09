import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ZhAlertComponent } from '../views/zh-alert/zh-alert.component';

@Injectable({
  providedIn: 'root'
})
export class ZhDialogService {

  constructor(
    // 注入组件工厂
    private resolve: ComponentFactoryResolver
  ) { }
  containerDom: ViewContainerRef;
  // 定义动态组件对象
  dynamicComponent: ComponentRef<ZhAlertComponent>
  open({ title = '标题头', content = '内容', onlySureBtn = false }): Observable<any> {
    const test = new Subject();
    test.next('dialog');
    const component = this.resolve.resolveComponentFactory(ZhAlertComponent);
    this.dynamicComponent = this.containerDom.createComponent(component);
    this.dynamicComponent.instance.title = title;
    this.dynamicComponent.instance.content = content;
    this.dynamicComponent.instance.onlySureBtn = onlySureBtn;
    this.dynamicComponent.instance.operation.subscribe((data: boolean) => {
      test.next(data);
      this.close();
    })
    return test;
  }

  setDom(dom: ViewContainerRef) {
    this.containerDom = dom;
  }
  getDom() {
    return this.containerDom;
  }
  close() {
    this.containerDom.clear();
  }
}
