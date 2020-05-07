import { Component, OnInit } from '@angular/core';
import { PersonService } from './../services/person.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	
  constructor(private service: PersonService) {
		
	}
	
  ngOnInit() {
		
  }
	
	isUserLoggedIn(): boolean {
		return this.service.isUserLoggedIn();
	}
	
	logout(): void {
		this.service.logout();
	}
	
}







