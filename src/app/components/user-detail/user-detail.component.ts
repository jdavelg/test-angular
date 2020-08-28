import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers:[UserService]
})
export class UserDetailComponent implements OnInit {

  public page_title:string;
public user:User;
public identity:any;
public token:any;
public status:string;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _userService: UserService
  ) { 
    this.page_title="Modifica tus datos";
    
    this.token= this._userService.getToken();
   
  }

  ngOnInit(): void {
this.getUser()
  }

getUser(){
  //sacar id de la URL

  this._route.params.subscribe(params=>{
    let id= +params['id']

    //hacer peticion Ajax
    this._userService.getUser(id).subscribe(
      response=>{
        this.user=response.user
        console.log(this.user);
        
      },
      error=>{
       console.log(error);
        
      }
    )
  })
}

}
