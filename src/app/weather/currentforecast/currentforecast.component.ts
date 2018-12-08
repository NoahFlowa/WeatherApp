import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/service/open-weather.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-currentforecast',
  templateUrl: './currentforecast.component.html',
  styleUrls: ['./currentforecast.component.css']
})
export class CurrentforecastComponent implements OnInit {
  currentWeather: any;

  constructor(private data: OpenWeatherService) {}

  ngOnInit() {
    this.data.getCurrentWeather().subscribe(data => {
      this.currentWeather = data;
      console.log(this.currentWeather);
    });

    // This shit works but cant figure how to use them in the currentforecast.component.html file
    //
    // this.data.getCurrentWeather().subscribe(resp => {
    //   const cityName = resp.name;
    //   const wDesc = resp.weather[0].description;
    //   const currentTemp = resp.main.temp;
    //   const maxTemp = resp.main.temp_max;
    //   const minTemp = resp.main.temp_min;
    //   console.log(cityName, wDesc);
    //   return cityName;
    // });

  }
}
