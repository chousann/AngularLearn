import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class City {
  public cityCode: string;
  public cityName: string;
}
