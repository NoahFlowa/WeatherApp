// Default Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Component/Services Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './ui/nav/nav.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/home/home.component';
import { ForecastComponent } from './ui/forecast/forecast.component';
import { DayforecastComponent } from './weather/dayforecast/dayforecast.component';
import { Day2Component } from './weather/day2/day2.component';
import { Day3Component } from './weather/day3/day3.component';
import { Day4Component } from './weather/day4/day4.component';
import { Day5Component } from './weather/day5/day5.component';
import { ContactComponent } from './ui/contact/contact.component';
import { CurrentforecastComponent } from './weather/currentforecast/currentforecast.component';

// Other Imports
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ForecastComponent,
    DayforecastComponent,
    CurrentforecastComponent,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
