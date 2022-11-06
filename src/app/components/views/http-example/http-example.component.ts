import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/main/service/http.service';
import { ZhDialogService } from 'src/app/main/service/zh-dialog.service';

@Component({
  selector: 'zh-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.scss']
})
export class HttpExampleComponent implements OnInit {

  constructor(
    private zhDialogService: ZhDialogService,
    private http: HttpService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  requesrServer() {
    this.http.getRsponseData().subscribe(data => {
      console.log(data);
    });
  }

  interceptorTest() {
    // this.http.getJsonTest().subscribe(data => {
    //   console.log('json请求结果', data);
    // })
    this.httpClient.get("../../../../assets/json/test.json").subscribe(data => {
      console.log("内部http", data);
    })
  }

}
