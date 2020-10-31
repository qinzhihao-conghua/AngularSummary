import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'zh-for-content',
  templateUrl: './zh-for-content.component.html',
  styleUrls: ['./zh-for-content.component.scss']
})
export class ZhForContentComponent implements OnInit {

  constructor() { }

  @ContentChild('content')
  contentComp: ElementRef;
  @ContentChildren('content')
  contentCompList: QueryList<ElementRef>;

  ngOnInit(): void {
  }

  getContent() {
    console.log('ContentChild通过模板引用的方式', this.contentComp);
    console.log('ContentChildren通过模板引用的方式', this.contentCompList);
  }

}
