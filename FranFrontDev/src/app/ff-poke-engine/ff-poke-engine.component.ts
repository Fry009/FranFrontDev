import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonList} from '../pokemonList'
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-ff-poke-engine',
  templateUrl: './ff-poke-engine.component.html',
  styleUrls: ['./ff-poke-engine.component.css']
})
export class FfPokeEngineComponent implements OnInit {

  pokemonList: PokemonList;



  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemonList().subscribe(data => this.pokemonList = {
        count: data.count,
        results: data.results
    });
  }

}
