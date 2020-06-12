import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'router-child2',
  templateUrl: './router-child2.component.html',
  styleUrls: ['./router-child2.component.scss']
})
export class RouterChild2 {
  constructor(
    private router: ActivatedRoute
  ) { }

  id: string;
  name: string;
  ngOnInit() {
    //由于snapshot这种方式写在ngoninit中，只有在页面第一次加载时才会拿到
    // this.id=this.router.snapshot.params["id"];
    this.router.params.subscribe(params => {//推荐使用订阅的方式
      this.id = params["id"];
      this.name = params["name"];
    })
  }
}
