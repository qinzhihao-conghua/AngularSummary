import { Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'zh-for-view',
  templateUrl: './for-view.component.html',
  styleUrls: ['./for-view.component.scss']
})
export class ForViewComponent implements OnInit {

  constructor() { }

  @ContentChild(ForViewComponent)
  contentComp: ElementRef;
  @ContentChildren(ForViewComponent)
  contentCompList: QueryList<ElementRef>;

  @Input()
  index: number;

  name: string;

  ngOnInit(): void {
    this.name = `我是组件${this.index}`;
  }
  getContent() {
    console.log('ContentChild通过模板引用的方式', this.contentComp);
    console.log('ContentChildren通过模板引用的方式', this.contentCompList);
  }
}
