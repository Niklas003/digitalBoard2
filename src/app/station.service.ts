import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const hauptbahnhofUrl = 'https://v5.db.transport.rest/stops/8011160/departures?duration=120&linesOfStops=false&remarks=true&language=de';

const gruenbergUrl = 'https://v5.db.transport.rest/stops/8089016/departures?duration=30&linesOfStops=false&remarks=true&language=de';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

  public getHbf(): Observable<any> {
    return this.http.get(hauptbahnhofUrl);
  }

  public getGruenberg(): Observable<any>{
    return this.http.get(gruenbergUrl);
  }
}
