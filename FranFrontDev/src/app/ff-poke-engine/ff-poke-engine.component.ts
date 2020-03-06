import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonList} from '../pokemonList';
import {FormControl} from '@angular/forms';
import {PokemonService } from '../pokemon.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-ff-poke-engine',
  templateUrl: './ff-poke-engine.component.html',
  styleUrls: ['./ff-poke-engine.component.css']
})
export class FfPokeEngineComponent implements OnInit {

  pokemonList: PokemonList;
  myControl = new FormControl();
  filteredOptions: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.pokemonList.results.slice())
    );

  }

  getPokemonList() {
    this.pokemonService.getPokemonList().subscribe(data => this.pokemonList = {
        count: data.count,
        results: data.results
    });

  }

  displayFn(pokemon: Pokemon): string {
    return pokemon && pokemon.name ? pokemon.name : '';
  }

  private _filter(name: string): Pokemon[] {
    const filterValue = name.toLowerCase();
    return this.pokemonList.results.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
