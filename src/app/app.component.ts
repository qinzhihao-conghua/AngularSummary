import { Component } from '@angular/core';
import { HttpService } from './service/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private http: HttpService
  ) { }
  title = '覃智浩Angular学习与工作总结';

  requesrServer() {
    this.http.getRsponseData().subscribe(data => {
      console.log(data);
    });
  }

}
