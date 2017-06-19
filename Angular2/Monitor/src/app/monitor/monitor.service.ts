import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Monitor } from "app/monitor/monitor.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Configuration {
     public Server: string = 'http://hsqlweb01:8065/';
     public ApiUrl: string = 'dashboard/GetAllJsons';
    // public Server: string = 'http://localhost:3412/';
    // public ApiUrl: string = 'users/';
   
   
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}


@Injectable()
export class MonitorService {
   
    private actionUrl: string;
    private headers: Headers;
    private obj :any;

   constructor(private _http: Http, private _configuration: Configuration) {

      //  this.getJSON().subscribe(data => this.obj=data =>console.log(this.obj), error => console.log(error));
         

        this.actionUrl = _configuration.ServerWithApiUrl ;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getMonitor(): Observable<Monitor[]>{
    return  this._http.get(this.actionUrl).map(this.extractData)
}

//    getMonitor(){
//     return  this._http.get(this.actionUrl).map(this.extractData)
//     }


   private extractData(res: Response)  {
     let body =  res.json();
     let corpo = body || {};
    //  console.log(corpo)
    //  console.log(JSON.parse(corpo))


     return JSON.parse(body || {});


 }

public getJSON(): Observable<any> {
         return this._http.get("file.json")
                         .map((res:any) => res.json());

     }



//    private extractData(res: Response) : string {
//      let body =  res.json();
//      let corpo = res.json();
     
//      for (var index = 0; index < corpo.length; index++) {
//          var element = corpo[index];
//          console.log(element);
//      }
//      return body || { };

//    }

private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
        
    }

}
