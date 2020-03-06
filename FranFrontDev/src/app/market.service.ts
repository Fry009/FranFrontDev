import { Injectable } from '@angular/core';
import { Market } from './market';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json'}
     )
  };
  constructor(private http: HttpClient) {

   }

   /** GET hero by id. Will 404 if id not found */
   getMarkets(district: string): Observable<Market[]> {
    //const url = `${this.baseUrl}/distrito_nombre=${district}`;
    const url = `${this.baseUrl}`;
    return this.http.get<Market[]>(url).pipe(
      tap(_ => this.log(`fetched Markets id=${district}`)),
      catchError(this.handleError<Market[]>(`getHero id=${district}`))
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
