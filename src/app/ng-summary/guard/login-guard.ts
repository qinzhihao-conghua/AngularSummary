import { CanActivate } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {
    canActivate(): boolean {
        let loginIn: boolean = Math.random() < 0.5;
        if (!loginIn) {
            console.log("用户未登陆");
            return false;
        }
        else {
            console.log("用户登陆成功");
            return true;
        }
    }

}