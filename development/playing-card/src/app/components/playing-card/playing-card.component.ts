import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonTypeProperties } from '../utils/pokemon.utils';


@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  @Input() pokemon = new Pokemon();

  get color(): string {
    return PokemonTypeProperties[this.pokemon.type]?.color || 'lightgray';
  }
}
