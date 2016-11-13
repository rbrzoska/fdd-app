import { PeopleService } from './../services/people.service';
import { Person } from './../interfaces/person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauls',
  templateUrl: './gauls.component.html',
  styleUrls: ['./gauls.component.css']
})
export class GaulsComponent implements OnInit {
gauls:Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getAllPeople('gauls').subscribe(data => {
      this.gauls = data;
    });
  }

}
