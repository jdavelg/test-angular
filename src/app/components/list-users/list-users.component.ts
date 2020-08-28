import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers:[UserService]
})
export class ListUsersComponent implements OnInit {

public token:any;
public users:any

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _userService: UserService
  ) {    
    
    this.token= this._userService.getToken();
   
  }

  ngOnInit(): void {
    this.getUsers()
  }

getUsers(){
  this._userService.getUsers().subscribe(
    response=>{
this.users=response.usuarios
    },
    error=>{
console.log(error);

    }
  )
}

}
