import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicInstanceComponent } from './dynamic-instance/dynamic-instance.component';

@Component({
  selector: 'zh-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  // 拿到动态组件容器
  @ViewChild("dynamic", { read: ViewContainerRef, static: true })
  dynamicContainer: ViewContainerRef;
  // 定义动态组件对象
  dynamicComponent: ComponentRef<DynamicInstanceComponent>
  constructor(
    // 注入组件工厂
    private resolve: ComponentFactoryResolver
  ) { }
  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log('宿主容器', this.dynamicContainer);
    const component = this.resolve.resolveComponentFactory(DynamicInstanceComponent);
    this.dynamicComponent = this.dynamicContainer.createComponent(component);
    this.dynamicComponent.instance.title = 'bbbbbb';
  }
  addNewOne() {
    const component = this.resolve.resolveComponentFactory(DynamicInstanceComponent);
    this.dynamicComponent = this.dynamicContainer.createComponent(component);
    this.dynamicComponent.instance.title = 'ccc';
  }

}
