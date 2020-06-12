import { Directive, ViewContainerRef } from '@angular/core';
import { ZhDialogService } from '../service/zh-dialog.service';

@Directive({
  selector: '[zhZhDialog]'
})
export class ZhDialogDirective {

  constructor(
    private zhDialogService: ZhDialogService,
    private vc: ViewContainerRef
  ) { }
  ngOnInit() {
    this.zhDialogService.setDom(this.vc);
  }

}
