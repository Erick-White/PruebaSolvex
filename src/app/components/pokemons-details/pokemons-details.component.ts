import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/service/pokemons.service';
import * as fileSaver from 'file-saver';


@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.css']
})
export class PokemonsDetailsComponent implements OnInit {
  PokeInfo: any = {};
  pokemons:any[]=[];
  
  totalpokemos!: number;
  Pokess:any;
  constructor(private PokeServise:PokemonsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let pokeId = this.route.snapshot.params['id'];
    this.PokeServise.PokemonsDetailsByID(pokeId).subscribe(res => {
      this.Pokess = res; 
       
    })
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
      this. PokeInfo = res;
      console.log(res)
     
      
   });
  }
  download(id:number) {
    //this.fileService.downloadFile().subscribe(response => {
		this.PokeServise.downloadFile(id).subscribe((response: any) => { //when you use stricter type checking
			let blob:any = new Blob([response], { type: 'text/plain; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, 'PokemonDetail.txt');
		//}), error => console.log('Error downloading the file'),
		}), (error: any) => console.log('Error downloading the file'), //when you use stricter type checking
                 () => console.info('File downloaded successfully');
  }
  
}
