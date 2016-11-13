import { PeopleService } from './../services/people.service';
import { Person } from './../interfaces/person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romans',
  templateUrl: './romans.component.html',
  styleUrls: ['./romans.component.css']
})
export class RomansComponent implements OnInit {
  romans:Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getAllPeople('romans').subscribe(data => {
      this.romans = data;
    });
  }

}
