import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// 
import { Md5 } from 'ts-md5'
@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor( private http: HttpClient) {
    console.log('Marvel service listo');
   }
    
  getQuery(query: string) {
    const baseUrl = 'https://gateway.marvel.com:443';
    const ts = Date.now();
    const publicKey = `bfdde0f3aedbb27fac12e79e43956136`;
    const privateKey = `fada2cea56782058efb9769b49550aa749cd069a`;
    const hash =  Md5.hashStr( ts + privateKey + publicKey );
    const params = `ts=${ ts }&apikey=${ publicKey }&hash=${ hash }`
    const url = `${ baseUrl }/${ query }?${ params }`;
    return this.http.get( url );
  }
  //https://gateway.marvel.com:443/v1/public/comics?apikey=bfdde0f3aedbb27fac12e79e43956136
   getComics(){
    return this.getQuery('v1/public/comics');
    // return [ { code: 45, status: 'stirg' } ]
  }

}                                                                                      
                                          