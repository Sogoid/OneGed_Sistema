import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PeriodicElementGroup } from '../models/periodic-element-group.model';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private url = `${environment.api}/api`;

  constructor(private _httpClient: HttpClient) {

  }

  obterGroup() {
    return this._httpClient.get<PeriodicElementGroup[]>(`${this.url}/lista-grupo`)
      .pipe(
        // Tratamento de erros
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }

  obterGroupById(idGroup: number) {
    return this._httpClient.get<PeriodicElementGroup>(`${this.url}/grupo/${idGroup}`)
      .pipe(
        catchError(this.handleError) // Tratamento de erros
      );
  }

  createGroup(newGroup: PeriodicElementGroup) {
    return this._httpClient.post<PeriodicElementGroup[]>(`${this.url}/criar-grupo`, newGroup)
      .pipe(
        catchError(this.handleError) // Tratamento de erros
      );
  }


  editGroup(idGroup: number, group: PeriodicElementGroup) {
    return this._httpClient.put<PeriodicElementGroup[]>(`${this.url}/atualizar-grupo/${idGroup}`, group)
      .pipe(
        catchError(this.handleError) // Tratamento de erros
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);
    return throwError(() => error);
  }
}
