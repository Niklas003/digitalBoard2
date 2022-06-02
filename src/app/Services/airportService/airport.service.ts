import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { _MatTabBodyBase } from '@angular/material/tabs';

 const berUrlArr = 'https://ber.berlin-airport.de/api.flights.json?arrivalDeparture=A&dateFrom=';
 const berUrlDep = 'https://ber.berlin-airport.de/api.flights.json?arrivalDeparture=D&dateFrom=';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  today:any;
  tomorrow:any;
  constructor(private http: HttpClient) { }

  public getEDDBDep(): Observable<any> { 
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.tomorrow =  this.tomorrow.toISOString();
    this.today = new Date();
    this.today = this.today.toISOString();
    return this.http.get(berUrlDep + this.today+ '&dateUntil='+this.tomorrow+'&search=&lang=de&itemsPerPage=9');
  }

  public getEDDBArr(): Observable<any> {
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.tomorrow =  this.tomorrow.toISOString();
    this.today = new Date();
    this.today = this.today.toISOString();
    return this.http.get(berUrlArr + this.today+ '&dateUntil='+this.tomorrow+'&search=&lang=de&itemsPerPage=9');
  }

}
