import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'zh-pipe',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  condition = false;
  colorAndSize = { color: 'red', size: '24' };
  uperCaseValue: string;
  onKey(e: Event) {
    console.log("enter", e);
  }
  test() {
    this.condition = !this.condition;
  }

}
