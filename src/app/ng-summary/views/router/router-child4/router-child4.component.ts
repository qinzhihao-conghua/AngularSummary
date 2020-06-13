import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'zh-router-child4',
  templateUrl: './router-child4.component.html',
  styleUrls: ['./router-child4.component.scss']
})
export class RouterChild4 {
  constructor(private router: ActivatedRoute) {

  }
  ngOnInit() {

  }
}
