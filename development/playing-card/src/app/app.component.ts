import { Component } from '@angular/core'
import { PlayingCardComponent } from "./playing-card/playing-card.component";
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent]
})

export class AppComponent {

  pokemon1!: Pokemon;

  constructor() {
    this.pokemon1 = new Pokemon();
    this.pokemon1.name = 'Bulbizarre';
    this.pokemon1.number = '001';
    this.pokemon1.type = 'Plante';
    this.pokemon1.imageUrl = 'img/bulbizarre.png';
  }
  
}
