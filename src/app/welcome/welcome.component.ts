import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from './../services/person.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
	
	username: string = '';
	password: string = '';
	
  constructor(private service: PersonService, private route: ActivatedRoute) {
		
	}

  ngOnInit(): void {
		this.username = this.route.snapshot.params['username'];
		this.password = this.route.snapshot.params['password'];
  }
	
	
	
}






