import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../services/people.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    public chat: any[];
    public questionText: string;
    public pendingMessage: boolean;

    constructor(private peopleService: PeopleService) {
    }

    ngOnInit() {
        this.questionText = '';
        this.chat = [];
    }


    askCaesar() {
        setTimeout(() => this.pendingMessage = true, 1000);
        this.chat.unshift({
            avatar: 'asterix.jpg',
            text: this.questionText
        });
        this.peopleService.getChatAnswer().subscribe(answer => {

            this.pendingMessage = false;
            this.chat.unshift({
                avatar: 'julek.jpg',
                text: answer
            });
        });

        this.questionText = '';
    }
}
