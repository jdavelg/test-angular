import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

public page_title:string;
public user:User;
public status:string;
public identity:any;
public token:any


  constructor(
    private _userService:UserService,
  private _router:Router,
  private _route:ActivatedRoute
  ) {
    this.page_title="Iniciar sesión";
    this.user=new User('','','','','',1,'','',0)
   }

  ngOnInit(): any {
  }
  onSubmit(form){
    this._userService.signup(this.user).subscribe(
      response=>{
if(response.length>=30){
  
  //save token in a property and save in local storage
  this.token=response
  localStorage.setItem('token', this.token)
  this.status="success";
  this._router.navigate(['/inicio'])

}else{
  this.status="error"

}
      },
      error=>{
        this.status="error"
      }
    )
  }

}
