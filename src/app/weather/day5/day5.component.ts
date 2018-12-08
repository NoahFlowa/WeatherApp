import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/service/open-weather.service';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {
  currentWeather: any;

  constructor(private data: OpenWeatherService) {}

  ngOnInit() {
    this.data.get4DayWeather().subscribe(data => {
      this.currentWeather = data;
      const date = data.list[1].dt_text;
      console.log(this.currentWeather);
    });
  }
}
