import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class HttpService {
  constructor() { }

  abstract request(): Observable<any>;
  abstract queryWeather(cityCode: string): Observable<any>;
  abstract queryCity(cityName: string): Observable<any>;
}
