import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
	private location: String;
	private url: string;
	public response: any;
	
 // https://api.ambeedata.com/weather/latest/by-lat-lng?lat=12&lng=77
  constructor(private httpClient: HttpClient) { 
	this.location = "";
	this.url = "https://api.oceandrivers.com/static/resources.json";
	}
  


  callAPI(): Observable<any> {
    this.response = this.httpClient.get(this.url);
	return this.response;
  }
  
  getweather(lat: number, lng: number)
  {
	this.location="by-lat-lng?lat="+ lat + "&lng="+ lng;
	this.url= environment.weatherapi + this.location;
  }
}
