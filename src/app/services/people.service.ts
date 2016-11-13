import { Person } from './../interfaces/person';
import { AppComponent } from './../app.component';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import  'rxjs/Rx';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  getAllPeople(type: string): Observable<Person[]> {
    return this.http.get(`http://localhost:8888/${type}`).map((res: Response) => res.json());
  }

  getPerson(type: string, id: string): Observable<Person> {
    return this.http.get(`http://localhost:8888/${type}/${id}`).map((res: Response) => res.json());
  }
}
