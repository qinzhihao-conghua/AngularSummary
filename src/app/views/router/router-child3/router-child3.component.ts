import { Component, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from '@angular/core/src/render3';


@Component({
  selector: 'router-child3',
  templateUrl: './router-child3.component.html',
  styleUrls: ['./router-child3.component.scss']
})
export class RouterChild3 {
  constructor(private router: ActivatedRoute) {

  }
  id: string;
  name: string;
  ngOnInit() {
    // this.id=this.router.snapshot.queryParams["id"];//由于snapshot这种方式写在ngoninit中，只有在页面第一次加载时才会拿到
    this.router.data.subscribe(pram => {
      console.log(pram);
    })
    this.router.params.subscribe(pram => {
      this.id = pram["id"];
      this.name = pram["name"];
    })
  }
}
