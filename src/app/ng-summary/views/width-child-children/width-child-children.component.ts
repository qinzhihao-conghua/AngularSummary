import { Component, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ForViewComponent } from './for-view/for-view.component';

@Component({
  selector: 'zh-width-child-children',
  templateUrl: './width-child-children.component.html',
  styleUrls: ['./width-child-children.component.scss']
})
export class WidthChildChildrenComponent implements OnInit {

  constructor() { }

  @ViewChild('view')
  idComp: ComponentRef<ForViewComponent>;
  @ViewChild(ForViewComponent)
  classComp: ComponentRef<ForViewComponent>;
  @ViewChildren('view')
  idChildrenComp: QueryList<ForViewComponent>;
  @ViewChildren(ForViewComponent)
  classChildrenComp: QueryList<ForViewComponent>;

  tip = '';

  ngOnInit(): void {
  }

  getView() {
    this.tip = '看控制台';
    console.log('ViewChild通过模板引用的方式', this.idComp);
    console.log('ViewChild通过组件类名的方式', this.classComp);
    console.log('ViewChildren通过模板引用的方式', this.idChildrenComp);
    console.log('ViewChildren通过组件类名的方式', this.classChildrenComp);
  }

}
