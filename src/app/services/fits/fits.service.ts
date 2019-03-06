import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FitsService {

	private _url: string = "/assets/data/json/fits.json";

  constructor(private http: HttpClient) { }

  getFits(): Observable<any[]> {
  	return this.http.get<any[]>(this._url, {responseType: 'json'}).pipe(
  																			catchError(this.errorHandler)
  																		);
  }
  errorHandler(error: HttpErrorResponse) {
  	return observableThrowError(error.message || "Server Error");
  }
}
