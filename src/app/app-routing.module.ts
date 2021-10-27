import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllPokemonsComponent } from './components/all-pokemons/all-pokemons.component';
import { PokemonsDetailsComponent } from './components/pokemons-details/pokemons-details.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

 {path:"",component:HomeComponent},
{
  path:"All", component:AllPokemonsComponent,
},
{
   path: "Poke/:id", component:PokemonsDetailsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
