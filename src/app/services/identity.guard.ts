
import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class IdentityGuard implements CanActivate {

constructor(
    private _router:Router,
    private _userService:UserService
){

}

    canActivate(): any{
        let token= this._userService.getToken()
        if(token){
        return true
    }else{
        this._router.navigate(['/inicio'])
        return false
    }
    }
}
