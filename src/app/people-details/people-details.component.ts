import { Person } from './../interfaces/person';
import { PeopleService } from './../services/people.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  personType: string;
  personId: string;
  person: Person;
  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.personType = params['type'];
      this.personId = params['id'];
      this.peopleService.getPerson(this.personType, this.personId).subscribe(person => this.person = person);
    });
  }

}
