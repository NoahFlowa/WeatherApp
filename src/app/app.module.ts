import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './ui/nav/nav.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/home/home.component';
import { ForecastComponent } from './ui/forecast/forecast.component';
import { OpenWeatherComponent } from './service/open-weather/open-weather.component';
import { DayforecastComponent } from './weather/dayforecast/dayforecast.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ForecastComponent,
    OpenWeatherComponent,
    DayforecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
