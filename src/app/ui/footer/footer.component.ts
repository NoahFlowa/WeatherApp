import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  appTitle = 'theWeather Copyright 2018';

  constructor() { }

  ngOnInit() {
  }

}
