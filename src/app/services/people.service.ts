import {Person} from './../interfaces/person';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const people: Person[] = [
    {
        id: 0,
        nation: "rzym",
        name: "Julek Cezar",
        avatar: "julek.jpg"
    },
    {
        id: 1,
        nation: "rzym",
        name: "Brutus",
        avatar: "brutus.jpg"
    },
    {
        id: 2,
        nation: "gal",
        name: "Asterix",
        avatar: "asterix.jpg"
    },
    {
        id: 3,
        nation: "gal",
        name: "Obelix",
        avatar: "obelix.jpg"
    }
];

const answers: string[] = [
    "Ave Ja",
    "Veni Vidi Vici",
    "Zakończmy dyskusję nim rzucę cię lwom na pożarcie",
    "Alea iacta est"
];

@Injectable()
export class PeopleService {

    getAllPeople() {
        return Observable.create(observer => {
            observer.next(people);
        })
    }

    getPerson(id: number) {
        return Observable.create(observer => {
            observer.next(people.find((people) => people.id == id))
        });
    }

    getChatAnswer() {
        return Observable.create(observer => {
            setTimeout(() => {
                observer.next(answers[Math.floor(Math.random() * answers.length)]);
            }, 3000);
        })
    }

}
