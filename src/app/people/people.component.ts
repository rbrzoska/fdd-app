import { Component, OnInit } from '@angular/core';
import {Person} from '../interfaces/person';
import {PeopleService} from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

  public people: Person[];

  constructor(private peopleService: PeopleService) { }


  ngOnInit() {
      this.peopleService.getAllPeople().subscribe(data => this.people = data);
  }
}
