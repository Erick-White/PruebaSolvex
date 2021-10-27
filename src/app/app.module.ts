import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPokemonsComponent } from './components/all-pokemons/all-pokemons.component';
import { PokemonsDetailsComponent } from './components/pokemons-details/pokemons-details.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPokemonsComponent,
    PokemonsDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
