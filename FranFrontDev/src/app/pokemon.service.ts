import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon';
import {PokemonList} from './pokemonList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json' }
    )
  };

  constructor(private http: HttpClient) {

  }

  /** GET 999 pokemon and count of all pokemon. Will 404 if id not found */
  getPokemonList(): Observable<PokemonList> {
    const url = `${this.baseUrl}/pokemon?offset=0&limit=999`;
    return this.http.get<PokemonList>(url).pipe(
      tap(_ => this.log(`fetched Pokemons id=`)),
      catchError(this.handleError<PokemonList>(`getHero id=`))
    );
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
