import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    // 如果要使用httpclient模块，则需要先在module中将该模块导入，否则在这里无法选择哪个模块下的httpclient
    // 不先导入的话，那么在这里智能提示只有"selenium-webdriver/http"模块可用
    private httpService: HttpClient
  ) { }
  data: any;
  /**
   * 请求服务器数据
   */
  getRsponseData(): Observable<any> {
    return this.httpService.get("/api");
    // return this.httpService.get("http://localhost:4200/api/xxx");
    // return this.httpService.get("http://localhost:3000/api/xxx");
  }
  /**
   * filereader进行文件上传
   * @param fileData 读取的文件数据
   */
  uploadFile(fileData: string | ArrayBuffer): Observable<any> {
    return this.httpService.post<string>("fileReader/", fileData);
  }

  getJsonTest() {
    return this.httpService.get("assets/json/test.json");
  }
}
