import { Directive, ViewContainerRef } from '@angular/core';
import { ZhDialogService } from '../service/zh-dialog.service';

@Directive({
  selector: '[zhDialog]'
})
export class ZhDialogDirective {

  constructor(
    private zhDialogService: ZhDialogService,
    private vc: ViewContainerRef
  ) { }
  ngOnInit() {
    console.log('进入dialog指令');
    this.zhDialogService.setDom(this.vc);
  }

}
