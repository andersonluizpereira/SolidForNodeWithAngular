import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Monitor } from "app/monitor/monitor.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Configuration {
    public Server: string = 'http://hsqlweb01:8065/';
    public ApiUrl: string = 'dashboard/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}


@Injectable()
export class MonitorService {
   
    private actionUrl: string;
    private headers: Headers;

   constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'GetAllJsons/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

 public getMonitor = (): Observable<Monitor[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <Monitor[]>response.json());

    }

     private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
        
    }

}
