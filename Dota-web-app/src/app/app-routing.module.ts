import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HerosComponent } from './heros/heros.component';

const routes: Routes = [
  {path: '', component:HerosComponent},
  {path: 'heroDetails/:id/:lang',component:HeroDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
