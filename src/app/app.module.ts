import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import Httpclientmodule
import { HttpClientModule } from "@angular/common/http";

//import formsModule
import { FormsModule } from "@angular/forms";


import { routing,appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { IdentityGuard } from './services/identity.guard';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    UserEditComponent,
    ListUsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
    
  ],
  providers: [
    appRoutingProviders,
    IdentityGuard,
    UserService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
