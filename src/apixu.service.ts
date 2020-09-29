import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=26e4990113ef4f43ca25c48a26271fcf`
      );
  }

}