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

 private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
