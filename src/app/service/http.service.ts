import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beer } from '../model/beer';
@Injectable({
    providedIn: 'root'
  })
  export class HttpService {
    baseUrl: string = 'https://api.punkapi.com/v2/beers';

    constructor(private http: HttpClient) {
        console.log(this.getData);
    }

    getData() {
        return this.http.get<Beer[]>(this.baseUrl);
    }
  }