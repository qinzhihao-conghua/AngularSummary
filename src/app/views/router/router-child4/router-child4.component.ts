import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'router-child4',
  templateUrl: './router-child4.component.html',
  styleUrls: ['./router-child4.component.css']
})
export class RouterChild4 {
  constructor(private router: ActivatedRoute) {

  }
  ngOnInit() {

  }
}
