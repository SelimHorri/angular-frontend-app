import { Component, OnInit } from '@angular/core';
import { Person } from './../entities/person/person';
import { PersonService } from './../services/person.service';

@Component({
selector: 'app-list-persons',
templateUrl: './list-persons.component.html',
styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {
	
	headers = ['fname', 'lname', 'email', 'password', '', ''];
	listPersons: Person[];
	now: Date = new Date();
	
	constructor(private service: PersonService) {
		
	}
	
	reloadData(): void {
		this.service.findAll().subscribe(
			response => {
				this.listPersons = response;
			}
		);
	}
	
	ngOnInit(): void {
		this.reloadData();
	}
	
	
}







