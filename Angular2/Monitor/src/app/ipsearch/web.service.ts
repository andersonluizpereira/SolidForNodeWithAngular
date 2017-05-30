import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class WebService {

private _IPURL: string = "http://ip.jsontest.com/";

  constructor(private _http: Http) { }

  public getIP(): Observable<string>{
    return this._http.get(this._IPURL).map(this.extractIP)
  }

   private extractIP(res: Response) : string {
     let body = res.json();
     return body.ip || {};

   }


}




