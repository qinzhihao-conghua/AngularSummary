import { Component } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'zh-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  constructor(
    private httpService: HttpService
  ) { }


  uploader: FileUploader;
  ngOnInit() {
    this.uploader = new FileUploader({
      // url: "http://127.0.0.1:3000/uploadFile",
      url: "http://127.0.0.1:4200/uploadFile",
      method: "POST",
      itemAlias: "uploadedfile",//文件别名
      autoUpload: false,
      // headers: [
      //   { name: 'token', value: "sad" }, { name: 'Accept', value: '*/*' }
      // ]
    });

    // 网上说的解决跨域解决方法，无效
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  }

  selectedFileOnChanged(e: Event) {
  }

  uploadFile(e: Event) {

    // 这个解决跨域的方法也无效
    // this.uploader.onBeforeUploadItem = (fileItem: FileItem) => {
    //   // Note: 必须移除cookie，否则跨越设置的'*'通配符将不会生效，现在我们的nginx设置是'*',
    //   // 如果换成是具体到某个域名的话，这个问题将不会存在
    //   fileItem.withCredentials = false;
    // }

    this.uploader.queue[0].onBeforeUpload = function () {
      console.log("上传之前");

    }
    // 这个解决跨域的方法也无效
    // this.uploader.onAfterAddingFile = (item) => {
    //   item.withCredentials = false;
    // };

    this.uploader.queue[0].upload();// 开始上传

    console.log("是否在上传：" + this.uploader.queue[0].isUploading);

    this.uploader.queue[0].onProgress = function (number) {
      console.log("上传进度" + number);
    }

    // console.log("上传进度：" + this.uploader.queue[0].progress);

    this.uploader.queue[0].onComplete = function (response, status, headers) {
      if (status == 0) {
        console.log("结束码：" + status);
      } else {
        console.log("结束码：" + status + "响应体：" + response);
      }
    }

    this.uploader.queue[0].onError = function (response, status, headers) {
      if (status == 0) {
        console.log("错误码：" + status);
      } else {
        console.log("错误码：" + status + "响应体：" + response);
      }
    }

    // 上传文件成功后
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        console.log("状态码：" + status + "上传成功" + response);
      } else {
        // 上传文件后获取服务器返回的数据错误
        console.log("状态码：" + status + "上传失败" + response);
      }
    };

  }

  /**
   * 通过FileReader上传
   * @param event 事件对象
   */
  selectFile(event: any) {
    let reader = new FileReader();
    const appThis = this;
    let fileLength: number = event.target.files[0].size;
    let readLength: number = 5120;
    let tempLength: number = 0;

    if (readLength > fileLength) {
      readLength = fileLength;
    }
    else {
      readLength = 5120;
    }
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function () {

      appThis.httpService.uploadFile(this.result.slice(20, 5120)).subscribe(data => {
        tempLength = readLength;
        if ((fileLength - readLength) > 0) {
          // 如果文件长度小于以5120增长的读取长度，则读取长度等于文件长度，否则读取长度继续增加5120
          if ((fileLength - (readLength + 5120)) < 0) {
            readLength = fileLength;
          }
          else {
            readLength = readLength + 5120;
          }
          reader.readAsDataURL(event.target.files[0].slice(tempLength, readLength));
        }
        console.log(readLength);
      });
    }
    console.log(event.target.files[0].slice(0, 5120));
  }

}
