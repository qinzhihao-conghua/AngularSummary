import { Component } from '@angular/core';
import { HttpService } from './ng-summary/service/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private http: HttpService
  ) { }

  requesrServer() {
    this.http.getRsponseData().subscribe(data => {
      console.log(data);
    });
  }

}
