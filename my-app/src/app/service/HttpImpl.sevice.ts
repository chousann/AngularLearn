import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class HttpServiceImpl implements HttpService {
  num: number = 1552834813980;
  constructor(
    private httpClient: HttpClient
  ) { }


  request(): Observable<any> {
    return this.httpClient.get<any>('assets/read.txt');
  }

  queryWeather(cityCode: string): Observable<any> {
    let url: string;
    url = '/data/sk/' + cityCode + '.html';
    return this.httpClient.get<any>(url);
  }
  
  queryCity(cityName: string): Observable<string> {
    let url: string;
    url = '/search?cityname='+ cityName + '&_=' + this.num++;
    return this.httpClient.get(url, {responseType: 'text'});
  }

  getProvienceList(): Observable<any> {
    let url: string;
    url = 'data/list3/city.xml';
    return this.httpClient.get(url, {responseType: 'text'});
  }

  getCityList(provienceCode: string): Observable<any> {
    let url: string;
    url = 'data/list3/city' + provienceCode + '.xml';
    return this.httpClient.get(url, {responseType: 'text'});
  }

  getCountryList(provienceCode: string): Observable<any> {
    let url: string;
    url = 'data/list3/city' + provienceCode + '.xml';
    return this.httpClient.get(url, {responseType: 'text'});
  }

  getCityInfo(provienceCode: string): Observable<any> {
    let url: string;
    url = 'data/cityinfo/' + provienceCode + '.html';
    return this.httpClient.get<any>(url);
  }
}
