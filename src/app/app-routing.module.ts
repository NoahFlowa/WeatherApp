import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { ForecastComponent } from './ui/forecast/forecast.component';
import { ContactComponent } from './ui/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'forecast', component: ForecastComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
