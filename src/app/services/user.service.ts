import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Answer } from '../models/answer';
import { UserLogged } from '../models/userLogged';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'https://back-end-emae.herokuapp.com/api/user/';

  constructor(private _http: HttpClient, private shared: SharedService) { }


  public getUser(email: string):Observable<Answer> {
    return this._http.get<Answer>(this.url + email);
  }
  
}
