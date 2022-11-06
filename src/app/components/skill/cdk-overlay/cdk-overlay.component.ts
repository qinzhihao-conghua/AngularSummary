import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { OverlayDynamicComponent } from '../overlay-dynamic/overlay-dynamic.component';

@Component({
  selector: 'zh-cdk-overlay',
  templateUrl: './cdk-overlay.component.html',
  styleUrls: ['./cdk-overlay.component.scss']
})
export class CdkOverlayComponent implements OnInit {

  constructor(
    private overlay: Overlay,
    private vc: ViewContainerRef
  ) { }

  @ViewChild('byCompOri', { static: false })
  byCompOri!: ElementRef; // 注意是ElementRef
  @ViewChild('byTempOri', { static: false })
  byTempOri!: ElementRef;
  @ViewChild('tempContent', { static: false })
  tempContent: TemplatePortal;

  direOpen = false;
  ngOnInit() {

  }

  openCDK(value: number) {
    const config = new OverlayConfig();
    // 配置位置和滑动策略，可以配置水平垂直居中，也可以根据上下左右配置
    if (value) {
      config.positionStrategy = this.overlay.position().global().top(`${value}px`).centerHorizontally();
    } else {
      config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    }
    // 展示背景浮层
    config.hasBackdrop = true;
    // 创建overlay浮层
    const overlayRef = this.overlay.create(config);
    // 点击背景关闭
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
    // 添加浮层内容，使用动态组件的方式
    // attach接收TemplatePortal和Component类型，简单说就是接收组件类型和ng-template类型的
    const cdkCompRef = overlayRef.attach(new ComponentPortal(OverlayDynamicComponent));
    // const port = new TemplatePortal(`<div>999</div>`, this.vel);
    // const cdkCompRef = overlayRef.attach(port);
    cdkCompRef.instance.inputTest = '组件输入数据测试';
  }

  byConnectedTo(attachType: string) {
    let origin = null;
    if (attachType === 'component') {
      origin = this.byCompOri.nativeElement;
    } else if (attachType === 'template') {
      origin = this.byTempOri.nativeElement;
    }
    const strategy = this.overlay.position().flexibleConnectedTo(origin).withPositions([{
      // 浮层与连接点的位置
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      // offsetX:0,
      // offsetY:0
    }]);

    strategy.withLockedPosition(true);
    const config = new OverlayConfig({ positionStrategy: strategy });
    config.scrollStrategy = this.overlay.scrollStrategies.reposition();
    config.hasBackdrop = true;
    const overlayRef = this.overlay.create(config);

    if (attachType === 'component') {
      overlayRef.attach(new ComponentPortal(OverlayDynamicComponent));
    } else if (attachType === 'template') {
      // 添加一个空白的css类可以让浮层背景存在却看不到，也无法点击空白处
      config.backdropClass = 'cdk-bgc-test';
      overlayRef.attach(this.tempContent);
    }

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    })
  }

}
