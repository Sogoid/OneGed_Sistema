import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PeriodicElementUser } from '../models/periodic-element-user.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url = `${environment.api}/api`;

  constructor(private _httpClient: HttpClient) {

  }

  obterUser() {
    return this._httpClient.get<PeriodicElementUser[]>(`${this.url}/lista-usuario`)
      .pipe(
        // Tratamento de erros
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }

  createUser(newUser: PeriodicElementUser) {
    return this._httpClient.post<PeriodicElementUser[]>(`${this.url}/criar-usuario`, newUser)
      .pipe(
        catchError(this.handleError) // Tratamento de erros
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);
    return throwError(() => error);
  }

}
