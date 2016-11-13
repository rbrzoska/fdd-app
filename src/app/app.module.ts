
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RomansComponent } from './romans/romans.component';
import { GaulsComponent } from './gauls/gauls.component';
import { HomeComponent } from './home/home.component';

import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RomansComponent,
    GaulsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
