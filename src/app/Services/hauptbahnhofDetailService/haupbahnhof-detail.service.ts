import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const detailUrl1 = "https://v6.db.transport.rest/trips/";
const detailUrl2 = "?lineName=train&stopovers=true&remarks=true&polyline=false&language=de";

@Injectable({
  providedIn: 'root'
})
export class HaupbahnhofDetailServiceService {

  constructor(private http: HttpClient) { }

  public getHbfDetails(id:any): Observable<any> {
    console.log(detailUrl1+id+detailUrl2);
    return this.http.get(detailUrl1+id+detailUrl2);
  }
}
