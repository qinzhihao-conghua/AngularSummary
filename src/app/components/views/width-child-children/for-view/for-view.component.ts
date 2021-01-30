import { Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'zh-for-view',
  templateUrl: './for-view.component.html',
  styleUrls: ['./for-view.component.scss']
})
export class ForViewComponent implements OnInit {

  constructor() { }

  @Input()
  index: number;

  name: string;

  ngOnInit(): void {
    this.name = `我是组件${this.index}`;
  }

}
