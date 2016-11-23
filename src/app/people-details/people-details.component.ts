import {Person} from './../interfaces/person';
import {PeopleService} from './../services/people.service';
import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-people',
    templateUrl: './people-details.component.html',
    styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
    public personId: number;
    public person: Person;

    constructor(private route: ActivatedRoute, private peopleService: PeopleService) {
    }

    ngOnInit() {

        this.personId = this.route.snapshot.params['id'];
        this.peopleService.getPerson(this.personId).subscribe(data => this.person = data);
    }
}
