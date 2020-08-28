import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'testing';
public identity:any;
public token:any;

constructor(
  private _userService:UserService,
  private _router:Router,
  private _route: ActivatedRoute
){

  this.token= this._userService.getToken();
}

ngDoCheck(): void {
  this.token= this._userService.getToken();
  
}
ngOnInit(): void {

  
}


logout(){
  localStorage.clear();
  this.identity=null;
  this._router.navigate(['/inicio'])
}

}
