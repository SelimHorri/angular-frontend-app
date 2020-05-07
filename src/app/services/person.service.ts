import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from './../entities/person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
	
	private listPersons: Person[];
	private url: string;
	
  constructor(private http: HttpClient) {
		this.url = 'http://localhost:8080/persons';
	}
	
	public findAll(): Observable<Person[]> {
		return this.http.get<Person[]>(this.url);
	}
	
	public findById(id: number): Person {
		this.listPersons.forEach(person => {
			if (person.id === id) {
				return person;
			}
		});
		return null;
	}
	
	public save(person: Person): Observable<Person> {
		return this.http.post<Person>(this.url, person);
	}
	
	public deleteById(id: number): Observable<void> {
		return this.http.delete<void>(this.url);
	}
	
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
	
	isUserLoggedIn(): boolean {
		let user = sessionStorage.getItem('userAuth');
		return !(user === null);
	}
	
	logout(): void {
		sessionStorage.removeItem('userAuth');
	}
	
}







