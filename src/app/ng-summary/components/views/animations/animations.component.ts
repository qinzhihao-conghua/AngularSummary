import { Component, OnInit } from '@angular/core';
import { donghua } from './animations';

@Component({
  selector: 'zh-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [donghua]
})
export class AnimationsComponent implements OnInit {

  constructor() { }
  donghuaState = "left";
  flag = false;
  ngOnInit() {
  }

  start(e) {
    console.log(e);
    if (this.flag) {
      this.donghuaState = "left";
    } else {
      this.donghuaState = "right";
    }
    this.flag = !this.flag;
  }

}
