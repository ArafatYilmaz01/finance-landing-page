import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }


  /**
   * @name getCurrency
   * @returns 
   */
  public getCurrency() {
    return this.httpClient.get('https://open.er-api.com/v6/latest/USD');
  }
}
