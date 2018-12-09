import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/service/open-weather.service';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {
  currentWeather: any;

  constructor(private data: OpenWeatherService) {}

  ngOnInit() {
    this.data.get4DayWeather().subscribe(data => {
      this.currentWeather = data;
      console.log(this.currentWeather);
    });
  }
}
