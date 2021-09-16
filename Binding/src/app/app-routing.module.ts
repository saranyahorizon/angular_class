import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ChildPageComponent } from './child-page/child-page.component'

const routes: Routes = [
	{path: 'app-login', component: LoginComponent},
	{path: 'home-page', component: HomePageComponent},
	{path: 'app-register', component: RegisterComponent},
	{path: 'app-child-page', component: ChildPageComponent},
	{path: '', component:  LoginComponent},
	{path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
