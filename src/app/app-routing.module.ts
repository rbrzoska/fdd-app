import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PeopleComponent} from './people/people.component';
import {ChatComponent} from './chat/chat.component';
import {PeopleDetailsComponent} from './people-details/people-details.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'people', children: [
        {path: '', component: PeopleComponent},
        {path: ':id', component: PeopleDetailsComponent },
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
}