import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 const berUrlArr = 'https://ber.berlin-airport.de/api.flights.json?arrivalDeparture=A&dateFrom=2022-04-23T11:20:00&dateUntil=2022-04-24&search=&lang=de';
 const berUrlDep = 'https://ber.berlin-airport.de/api.flights.json?arrivalDeparture=D&dateFrom=2022-04-23T06:00:00&dateUntil=2022-04-24&search=&lang=de';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  public getEDDBDep(): Observable<any> { 
    return this.http.get(berUrlDep);
  }

  public getEDDBArr(): Observable<any> {
    return this.http.get(berUrlArr);
  }

}
