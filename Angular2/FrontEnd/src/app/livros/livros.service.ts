import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Livro, LivroPost, MensagemCadastro } from "app/livros/livro";
import 'rxjs/add/operator/map';

@Injectable()
export class Configuration {
     
     public Server: string = 'http://localhost:3412';
     public ApiUrl: string = '/livros';
   
   
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}


@Injectable()
export class LivrosService {
    
    private http: Http;
    private actionUrl: string;
    private headers: Headers;
    private obj :any;

     

     constructor(private _http: Http, private _configuration: Configuration) {
        this.http = _http;
        this.actionUrl = _configuration.ServerWithApiUrl ;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        
       
     
    }

    public getLivro(): Observable<Livro[]>{
    return  this._http.get(this.actionUrl).map(this.extractData)
   }

    public PutLivro(_livro:LivroPost) : Observable<MensagemCadastro> {
         let body = this.Data(_livro)
        console.log(body)
       return this._http.put(this.actionUrl,body, { headers : this.headers}).map(() => new MensagemCadastro('Livro alterada com sucesso', false));
               
    }

 private extractData(res: Response)  {
     let body =  res.json();
     let corpo = body || {};
     return body || {};

 }

 private Data(_livro:Livro)  {
     
     return JSON.stringify(_livro);

 }
 
 
 


private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }	

}

 


