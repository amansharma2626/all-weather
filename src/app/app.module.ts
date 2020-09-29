import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import {WeatherComponent} from '../weather/weather.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "../apixu.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
  RouterModule.forRoot(allAppRoutes), HttpClientModule],
  declarations: [ AppComponent, HelloComponent, WeatherComponent,],
  bootstrap:    [ AppComponent ],
  providers: [ApixuService],
})
export class AppModule { }
