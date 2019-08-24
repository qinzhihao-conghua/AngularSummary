import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'router-child',
  templateUrl: './router-child.component.html',
  styleUrls: ['./router-child.component.css']
})
export class RouterChild {
  constructor(private router:ActivatedRoute){

  }
  id:string;
  ngOnInit() {
    this.id=this.router.snapshot.queryParams["id"];//由于snapshot这种方式写在ngoninit中，只有在页面第一次加载时才会拿到
    console.log("传过来的"+this.id);
    this.router.queryParams.subscribe(params=>{//推荐使用订阅的方式
      this.id=params["id"];
    })
  }
}
