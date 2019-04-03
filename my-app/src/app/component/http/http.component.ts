import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { City } from '../../model/city';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  public provienceList: Array<City>;
  public provienceSelect: string;
  public cityList: Array<City>;
  public citySelect: string;
  public countryList: Array<City>;
  public countrySelect: string;

  public currentCity: City;

  public cityInfo: any;

  cityCode: string;
  cityList1: Array<{ cityCode: string; cityName: string; ref: string }> =
    new Array<{ cityCode: string; cityName: string; ref: string }>();
  response: any;
  kresponse: string;
  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit() {
    this.currentCity = new City();
    await this.setPullDown();
    this.currentCity = this.countryList[0];
  }

  async setPullDown() {
    await this.http.getProvienceList().subscribe(
      async result => {
        let list: Array<City> = new Array<City>();
        if (result) {
          let substrList: Array<string>;
          substrList = result.split(',');
          if (substrList && substrList.length > 0) {
            for (let i = 0; i < substrList.length; i++) {
              let itemArray: Array<string>;
              let provience: City = new City();
              itemArray = substrList[i].split('|');
              provience.cityCode = itemArray[0];
              provience.cityName = itemArray[1];
              list.push(provience);
            }
          }
          console.log('provvience' + result);
          this.provienceList = list;
          this.provienceSelect = this.provienceList[0].cityCode;

          await this.chooseProvience();
        } else {
          this.provienceList = list;
          this.provienceSelect = '';
        }
      }
    );
  }

  async chooseProvience() {
    await this.http.getCityList(this.provienceSelect).subscribe(
      async result => {
        let list: Array<City> = new Array<City>();
        if (result) {
          let substrList: Array<string>;
          substrList = result.split(',');
          if (substrList && substrList.length > 0) {
            for (let i = 0; i < substrList.length; i++) {
              let itemArray: Array<string>;
              let provience: City = new City();
              itemArray = substrList[i].split('|');
              provience.cityCode = itemArray[0];
              provience.cityName = itemArray[1];
              list.push(provience);
            }
          }
          this.cityList = list;
          this.citySelect = this.cityList[0].cityCode;

          await this.chooseCity();
        } else {
          this.cityList = list;
          this.citySelect = '';
          this.countryList = list;
          this.countrySelect = '';
        }
      }
    );
  }

  async chooseCity() {
    await this.http.getCountryList(this.citySelect).subscribe(
      async result => {
        let list: Array<City> = new Array<City>();
        if (result) {
          let substrList: Array<string>;
          substrList = result.split(',');
          if (substrList && substrList.length > 0) {
            for (let i = 0; i < substrList.length; i++) {
              let itemArray: Array<string>;
              let provience: City = new City();
              itemArray = substrList[i].split('|');
              provience.cityCode = itemArray[0];
              provience.cityName = itemArray[1];
              list.push(provience);
            }
          }
          this.countryList = list;
          this.countrySelect = this.countryList[0].cityCode;

          this.currentCity = this.countryList[0];
        } else {
          this.cityList = list;
          this.countrySelect = '';
        }
      }
    );
  }

  chooseCountry() {
    for (let i = 0; i < this.countryList.length; i++) {
      if (this.countryList[i].cityCode === this.countrySelect) {
        this.currentCity = this.countryList[i];
      }
    }
  }

  async search() {
    await this.http.getCountryList(this.countrySelect).subscribe(
      async result => {
        let list: Array<City> = new Array<City>();
        if (result) {
          let itemArray: Array<string>;
          itemArray = result.split('|');
          await this.http.getCityInfo(itemArray[1]).subscribe(
            result => {
              this.cityInfo = result;
              console.log('cityinfo:' + this.cityInfo.toString());
            }
          );
        }
      }
    );
  }

  async click() {
    const result = await this.http.request().toPromise();
    this.response = result;
    console.log(result);
  }

  async kclick() {
    if (this.cityList1 && this.cityList1.length > 0) {
      await this.http.queryWeather(this.cityList1[0].cityCode).subscribe(result => {
        this.kresponse = result;
        console.log(result);
      });
    }
  }
  async input() {
    if (this.cityCode) {
      let data: string;
      data = await this.http.queryCity(this.cityCode).toPromise();
      data = data.substring(1, data.length - 1);
      this.cityList1 = JSON.parse(data)
      this.cityList1.forEach(item => {
        item.cityCode = String(item.ref).split('~')[0];
        item.cityName = String(item.ref).split('~')[2];
      });
      console.log(this.cityList1);
    }
  }

  async choose(value: string) {
    await this.http.queryWeather(value).subscribe(result => {
      this.kresponse = result;
      console.log(result);
    });
  }

}
