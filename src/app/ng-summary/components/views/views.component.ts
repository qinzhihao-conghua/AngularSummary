import { Component, OnInit } from '@angular/core';
import { ZhDialogService } from '../service/zh-dialog.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'zh-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

  constructor(
    private zhDialogService: ZhDialogService,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

  requesrServer() {
    this.http.getRsponseData().subscribe(data => {
      console.log(data);
    });
  }

}
