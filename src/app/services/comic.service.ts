import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// 
import { Md5 } from 'ts-md5'
@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor( private http: HttpClient ) {
    console.log('Marvel service listo');
  }
    
  getQuery(query: string, queryParams?: string) {
    const baseUrl = 'https://gateway.marvel.com:443';
    const ts = Date.now();
    const publicKey = `bfdde0f3aedbb27fac12e79e43956136`;
    const privateKey = `fada2cea56782058efb9769b49550aa749cd069a`;
    const hash = Md5.hashStr(ts + privateKey + publicKey);
    queryParams = !queryParams ? '' : queryParams;
    const params = `ts=${ ts }&apikey=${ publicKey }&hash=${ hash }&${queryParams}`
    const url = `${ baseUrl }/${ query }?${ params }`;
    return this.http.get( url );
  }
  // get a list of comics
   getComics(){
    return this.getQuery('v1/public/comics');
   }
  // get a list of comics with offset and limit based on page
  getComicsPage( page : number, limit: number) {
    let queryParams = `offset=${page * limit + 1}&limit=${limit}`;
    return this.getQuery('v1/public/comics', queryParams);
   }
  // get a unique comic by id
  getComic(id: number) {
     console.log( id )
    return this.getQuery(`v1/public/comics/${ id }`);
  }
  // get related Comics
  getRelatedComics(param: string, value: string ) {
    return this.getQuery(`v1/public/comics`, `${ param }=${ value }`); 
  }
}                                                                                      
                                          