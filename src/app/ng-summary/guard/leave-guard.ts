import { CanDeactivate } from '@angular/router';
import { RouterChild4 } from '../views/router/router-child4/router-child4.component';

export class LeaveGuard implements CanDeactivate<RouterChild4>{
    canDeactivate(): boolean {
        return confirm("确定要离开这个模块吗？");
    }

}