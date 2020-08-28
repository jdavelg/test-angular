import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { IdentityGuard } from './services/identity.guard';



//routes array
const appRoutes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'inicio', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registro', component: RegisterComponent },
{ path: 'editar/:id', component: UserEditComponent, canActivate: [IdentityGuard] },
{ path: 'usuarios', component: ListUsersComponent, canActivate: [IdentityGuard] },
{ path: 'usuario/:id', component: UserDetailComponent, canActivate: [IdentityGuard] },
{ path: '**', component: ErrorComponent }
];


export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes)
