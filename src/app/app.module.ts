import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RomansComponent } from './romans/romans.component';
import { GreeksComponent } from './greeks/greeks.component';
import { GaulsComponent } from './gauls/gauls.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RomansComponent,
    GreeksComponent,
    GaulsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
