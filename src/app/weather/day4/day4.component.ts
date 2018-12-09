import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/service/open-weather.service';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {
  currentWeather: any;

  constructor(private data: OpenWeatherService) {}

  ngOnInit() {
    this.data.get4DayWeather().subscribe(data => {
      this.currentWeather = data;
      console.log(this.currentWeather);
    });
  }
}
