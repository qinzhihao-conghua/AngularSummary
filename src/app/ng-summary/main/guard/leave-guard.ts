import { CanDeactivate } from '@angular/router';
import { RouterChild4 } from '../views/router-example/router-child4/router-child4.component';
import { Injectable } from "@angular/core";

@Injectable()
export class LeaveGuard implements CanDeactivate<RouterChild4>{
    canDeactivate(): boolean {
        return confirm("确定要离开这个模块吗？");
    }

}