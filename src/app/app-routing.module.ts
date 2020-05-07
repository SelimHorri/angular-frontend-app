import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'welcome/:username/:password', component: WelcomeComponent, canActivate: [RouteGuardService]},
	{path: 'login', component: LoginComponent, canActivate: [RouteGuardService]},
	{path: 'list-persons', component: ListPersonsComponent, canActivate: [RouteGuardService]},
	
	{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	
}





