import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zh-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  constructor() { }

  @Input() sideBarMenu: Array<any>;
  @Output() clickItem = new EventEmitter();

  ngOnInit(): void {
  }
  clickHandle(item: any) {
    this.clickItem.emit(item);
  }

}
