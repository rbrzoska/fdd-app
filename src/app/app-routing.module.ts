import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RomansComponent } from './romans/romans.component';
import { GaulsComponent } from './gauls/gauls.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rzymianie', component: RomansComponent },
  { path: 'galowie', component: GaulsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, RomansComponent, GaulsComponent]