import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceService {

  constructor(
private http: Http

  ) { }


getUser() {
    return this.http.get(`http://localhost:3412/users`)
    .map((res:Response) => res.json());
  }

}
