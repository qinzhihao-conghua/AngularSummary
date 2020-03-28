import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[zhUnLess]'
})
export class UnLessDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  private hasView: boolean = false;
  @Input()
  set zhUnLess(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
    else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

}
