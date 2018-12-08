import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?zip=49685,us&units=imperial&appid=1f98752be741c9f40a091f4f5e848e78');
  }

  get4DayWeather() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?zip=49685,us&units=imperial&appid=1f98752be741c9f40a091f4f5e848e78');
  }

}
