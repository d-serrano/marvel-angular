import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Md5 } from 'ts-md5'
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) {
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

   // get the list of series
   getSeries(){
    return this.getQuery('v1/public/series');
   }
  // get a list of comics with offset and limit based on page
  getSeriesPage( page : number, limit: number) {
    let queryParams = `offset=${page * limit + 1}&limit=${limit}`;
    return this.getQuery('v1/public/series', queryParams);
   }
  // get a unique comic by id
  getSerie(id: number) {
    return this.getQuery(`v1/public/series/${ id }`);
  }
}
