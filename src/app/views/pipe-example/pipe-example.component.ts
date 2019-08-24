import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uperCaseValue:string;
  onKey(){
    console.log("enter");
  }

}
