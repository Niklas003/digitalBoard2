import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 const baseUrl1 = 'https://opensky-network.org/api/states/all?lamin=52.302524&lomin=13.315897&lamax=52.427674&lomax=13.647957';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  public getEDDB(): Observable<any> {
    return this.http.get(baseUrl1);
  }

}
