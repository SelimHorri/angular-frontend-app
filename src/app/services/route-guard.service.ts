import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PersonService } from './person.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
	
  constructor(private service: PersonService, private router: Router) {
		
	}
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		
		if (this.service.isUserLoggedIn())
			return true
		
		this.router.navigate(['login']);
		return false;
	}
	
}






