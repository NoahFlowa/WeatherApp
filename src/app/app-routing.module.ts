import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { ForecastComponent } from './ui/forecast/forecast.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'forecast', component: ForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
