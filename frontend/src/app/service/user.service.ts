import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PeriodicElementUser } from '../models/periodic-element-user.model';
import { CreateUser } from '../models/base-element.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url = `${environment.api}/api`;

  constructor(private _httpClient: HttpClient) {

  }

  obterUser() {
    return this._httpClient.get<PeriodicElementUser[]>(this.url);
  }

createUser(newUser: CreateUser) {
    return this._httpClient.post<PeriodicElementUser[]>(`${this.url}/createUser`, newUser)
  }

}
