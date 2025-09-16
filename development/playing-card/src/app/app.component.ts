import { Component } from '@angular/core'
import { PlayingCardComponent } from "./components/models/playing-card/playing-card.component";
import { Pokemon } from './components/models/models/pokemon.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';  

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent, SearchBarComponent],
})

export class AppComponent {

  pokemons!: Pokemon[];
  count: number = 0;
  search = '';

  selectedPokemonIndex = 0;

  constructor() {

    this.pokemons = [];

    const pokemon1 = new Pokemon();
    pokemon1.name = 'Bulbizarre';
    pokemon1.number = '001';
    pokemon1.type = 'Plante';
    pokemon1.imageUrl = 'img/bulbizarre.png';
    this.pokemons.push(pokemon1);

    const pokemon2 = new Pokemon();
    pokemon2.name = 'Herbizarre';
    pokemon2.number = '002';
    pokemon2.type = 'Plante';
    pokemon2.imageUrl = 'img/herbizarre.png';
    this.pokemons.push(pokemon2);

    const pokemon3 = new Pokemon();
    pokemon3.name = 'Florizarre';
    pokemon3.number = '003';
    pokemon3.type = 'Plante';
    pokemon3.imageUrl = 'img/florizarre.png';
    this.pokemons.push(pokemon3);
  }

  increaseCount() {
    this.count++;
  }

  evolvePokemon() {
    this.selectedPokemonIndex = (this.selectedPokemonIndex + 1) % this.pokemons.length;
  }
}
