import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';




@Injectable({
  providedIn: 'root'
})
export class UserService {
public url:string;
public identity:any;
public token:any;


  constructor(
    private _http: HttpClient
  ) { 
    this.url=global.url
  }

  prueba(){
    return "hola desde el servicio de angular"
  }

  register(user):Observable<any>{
    //convertir objeto a json

    let json=JSON.stringify(user)
    let params= 'json='+json
    //definir headers
    let headers= new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

    //make peticion ajax
return this._http.post(this.url+"usuario/crear", params, {headers:headers})
  }

  signup(user):Observable<any>{
//convertir objeto a json

let json=JSON.stringify(user)
let params= 'json='+json
//definir headers
let headers= new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

//make peticion ajax
return this._http.post(this.url+"login", params, {headers:headers})
   
  }

  getIdentity():Observable<any>{
let identity= JSON.parse(localStorage.getItem('identity'));

if(identity && identity!= null && identity!=undefined && identity!='undefined'){
this.identity=identity;
}else{
this.identity=null
}
return this.identity
  }

  getToken(){
    let token= localStorage.getItem('token');

    if(token && token!= null && token!=undefined && token!='undefined'){
    this.token=token;
    }else{
    this.token=null
    }
    return this.token
  }

  update(user):Observable<any>{

    let json=JSON.stringify(user)
    let params= 'json='+json
    let headers= new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization',this.getToken())

    return this._http.put(this.url+'usuario/actualizar', params, {headers:headers})
  }
  getUsers():Observable<any>{
 
    let headers= new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization',this.getToken())
    
    //make peticion ajax
    return this._http.get(this.url+"usuarios",  {headers:headers})
       
      }
      getUser(id):Observable<any>{
 
        let headers= new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization',this.getToken())
        
        //make peticion ajax
        return this._http.get(this.url+"usuario/detalle/"+id,  {headers:headers})
           
          }

      

}
