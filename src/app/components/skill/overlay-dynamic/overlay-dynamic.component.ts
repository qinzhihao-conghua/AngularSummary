import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zh-overlay-dynamic',
  templateUrl: './overlay-dynamic.component.html',
  styleUrls: ['./overlay-dynamic.component.scss']
})
export class OverlayDynamicComponent implements OnInit {

  constructor() { }

  @Input() inputTest = '';

  ngOnInit(): void {
  }

}
