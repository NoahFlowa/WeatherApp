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

// Other Imports
import { HttpClientModule } from '@angular/common/http';
import { CurrentforecastComponent } from './weather/currentforecast/currentforecast.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ForecastComponent,
    DayforecastComponent,
    CurrentforecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
