import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../main/service/http.service';
import { ZhDialogService } from '../../main/service/zh-dialog.service';

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
