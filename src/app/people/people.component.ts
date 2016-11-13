import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import {Person} from '../interfaces/person';
import {PeopleService} from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleType: string;
  people: Person[];

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.peopleType = params['type'];
      this.peopleService.getAllPeople(this.peopleType).subscribe(people => this.people = people);
    });
  }

}
