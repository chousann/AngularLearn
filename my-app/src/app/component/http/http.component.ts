import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { map } from 'rxjs/internal/operators/map'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  cityCode: string;
  cityList: Array<{cityCode: string;cityName: string;ref: string}> =
    new Array<{cityCode: string;cityName: string;ref: string}>();
  response: any;
  kresponse: string;
  constructor(
    private http: HttpService,
  ) { }

  ngOnInit() {
  }

  async click() {
    const result = await this.http.request().toPromise();
    this.response = result;
    console.log(result);
  }

  async kclick() {
    if (this.cityList && this.cityList.length>0) {
      await this.http.queryWeather(this.cityList[0].cityCode).subscribe(result => {
        this.kresponse = result;
        console.log(result);
      });
    }
  }
  async input() {
    if (this.cityCode) {
      let data: string;
      data = await this.http.queryCity(this.cityCode).toPromise();
      data = data.substring(1, data.length-1);
      this.cityList= JSON.parse(data)
      this.cityList.forEach(item => {
        item.cityCode = String(item.ref).split('~')[0];
        item.cityName = String(item.ref).split('~')[2];
      });
      console.log(this.cityList);
    }
  }

  async choose(value: string) {
    await this.http.queryWeather(value).subscribe(result => {
      this.kresponse = result;
      console.log(result);
    });
  }

}
