import { HttpClient,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
private url= "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  // getPokemon(name:string){
  //   return this.http.get(`${this.url}/${name}`)
  // }

  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
    // return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }
  PokemonsDetails(name:string){
    return this.http.get(`${this.url}/${name}`);
  }
  PokemonsDetailsByID(id:number){
    return this.http.get(`${this.url}/${id}`);
  }


  downloadFile(id:number): any {
		return this.http.get(`${this.url}/${id}`, {responseType: 'blob'});
  }
  
}
