import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apis-list',
  standalone: true,
  imports: [],
  templateUrl: './apis-list.component.html',
  styleUrl: './apis-list.component.css'
})
export class APIsListComponent {

  constructor(private router: Router){}

 ngOnInit():void{
  
 }

  toPokemonApi(): void{
    this.router.navigate(['/pokemon-api']);
  }

  toGoogleBooksApi(): void{
    this.router.navigate(['/books-api']);
  }

  toSpotifyApi(): void{
    this.router.navigate(['/spotify-api']);
  }


}
