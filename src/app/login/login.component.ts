import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from './../services/person.service';
import { RouteGuardService } from './../services/route-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	username : string;
	password : string;
	valid : boolean = false;
	validMsg : string = 'error';
	
  constructor(private service: PersonService, private router: Router, private routeGuardService: RouteGuardService) {
		
	}
	
  ngOnInit(): void {
		
  }
	
	/*
	public authenticate(username: string, password: string): boolean {
		
		this.findAll().subscribe(
			response => {
				this.listPersons = response;
			}
		);
		username = username.trim();
		let map: Map<string, string> = new Map<string, string>();
		
		this.listPersons.forEach(person => {
			map.set(person.email, person.password);
		});
		
		if ( !map.has(username) ) {
			console.log('there is no such mail !!!!!');
			return false;
		}
		else {
			if ( map.get(username) != password ) {
				console.log('incorrect password, try again !!!!!');
				return false;
			}
			else {
				if ( map.get(username) === password ) {
					console.log('Logged in, enjoyyy');
					sessionStorage.setItem('userAuth', username);
					return true;
				}
				else {
					console.log('ERROR !!!!!!!!!!!!!!!');
					return false;
				}
			}
			
		}
		
	}
	*/
	
	public onSubmit() {
		
		let testService = this.service.authenticate(this.username, this.password);
		
		if (testService) {
			this.valid = true;
			this.validMsg = 'GREAT';
			console.log(this.validMsg + '!!!!!!!!!!!!!!!');
			this.router.navigate(['welcome', this.username, this.password]);
		}
		else {
			// this.validMsg = 'error';
			console.log(this.validMsg + '!!!!!!!!!!!!!!!');
		}
	}
	
}






