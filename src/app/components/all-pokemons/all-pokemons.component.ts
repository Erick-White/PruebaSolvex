import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestPoken } from 'src/app/Model/pokemon';
import { PokemonsService } from '../../service/pokemons.service';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.css']
})
export class AllPokemonsComponent implements OnInit {
 
  currentContactInfo: any = {};
  pokemons:any[]=[];
  p: number = 1;
  
  totalpokemos!: number;
  name : any;
  constructor(private PokeServise:PokemonsService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.getPokemons();
  }

getPokemons(){
  this.PokeServise.getPokemons().subscribe((res:any)=>{
      this.totalpokemos = res.count;
    res.results.forEach((element:any) => {
      this.PokeServise.PokemonsDetails(element.name).subscribe((resp:any)=>{
      this.pokemons.push(resp);
      console.log(resp);
      });
    });
})
}
contactInfo(id: number) {
  
  this.PokeServise.PokemonsDetailsByID(id).subscribe(res => {
    this.currentContactInfo = res;
    console.log(res)
   
    
 });
}
search(){
  if(this.name === ""){
    this.ngOnInit();
  } else{
    this.pokemons = this.pokemons.filter(res =>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    
    });
    
  }
  
}
}