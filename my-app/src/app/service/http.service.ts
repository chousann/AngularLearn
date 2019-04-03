import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class HttpService {
  constructor() { }

  abstract request(): Observable<any>;
  abstract queryWeather(cityCode: string): Observable<any>;
  abstract queryCity(cityName: string): Observable<any>;
  abstract getProvienceList(): Observable<any>;
  abstract getCityList(provienceCode: string): Observable<any>;
  abstract getCountryList(provienceCode: string): Observable<any>;
  abstract getCityInfo(provienceCode: string): Observable<any>;
}
