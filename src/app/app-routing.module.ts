import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RomansComponent } from './romans/romans.component';
import { GreeksComponent } from './greeks/greeks.component';
import { GaulsComponent } from './gauls/gauls.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'romans', component: RomansComponent },
  { path: 'greeks', component: GreeksComponent },
  { path: 'gauls', component: GaulsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent, RomansComponent, GreeksComponent, GaulsComponent];