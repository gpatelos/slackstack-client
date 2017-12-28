import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stackpost } from '../model/stackpost';
import { STACKPOSTS } from '../model/mockposts';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class StackpostService {

  private stackpostsUrl = 'http://localhost:8080/stackItems/';

  constructor(private http: HttpClient) { }

  getStackposts(): Observable<Stackpost[]> {
    return this.http.get<Stackpost[]>(this.stackpostsUrl)
          .pipe(
              catchError(this.handleError('getStackposts', [])
   );

  }

  /** GET hero by id. Will 404 if id not found */
getStackPostById(id: number): Observable<Stackpost> {
  const url = `${this.stackpostUrl}/questionLookup/${id}`
  return this.http.get<Stackpost>(url)
      .pipe(
          catchError(this.handleError<Hero>(`getStackposts questionId=${id}`))
  );
}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
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
