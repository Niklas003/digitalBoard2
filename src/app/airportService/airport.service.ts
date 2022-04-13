import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 var baseUrl1 = 'https://Niklas003:Tonnenmuell37@opensky-network.org/api/flights/departure?airport=EDDB&begin=';
 var baseUrl2 = '&end=';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  timeNow:any;
  timeLater:any;

  constructor(private http: HttpClient) { }

  public getEDDB(): Observable<any> {
    this.timeNow = Math.round(Date.now()/1000);
    this.timeLater = Math.round((Date.now() - 10800000)/1000);
    console.log(this.timeNow,'',this.timeLater);
    return this.http.get(baseUrl1 + this.timeNow + baseUrl2 + this.timeLater);
  }

}
