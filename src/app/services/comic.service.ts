import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor( private http: HttpClient) {
    console.log('Marvel service listo');
   }
    
  getQuery(query: string) {
    const ts= Date.now()
    const publicKey = `bfdde0f3aedbb27fac12e79e43956136`;
    const privateKey = `fada2cea56782058efb9769b49550aa749cd069a`;
    const hash = ts + publicKey + privateKey;
    const params = `ts=${ ts }&apikey${ publicKey }&hash=${ privateKey }`
    const url = `http(s)://gateway.marvel.com/${ query }/${ params }`;
    return this.http.get( url );
  }

   getComics(){
      return this.getQuery('GET /v1/public/comics');
  }

}                                                                                      
                                          