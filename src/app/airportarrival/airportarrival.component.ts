import { Component, OnInit } from '@angular/core';
import { AirportService } from '../airportService/airport.service';

@Component({
  selector: 'app-airportarrival',
  templateUrl: './airportarrival.component.html',
  styleUrls: ['./airportarrival.component.scss']
})
export class AirportarrivalComponent implements OnInit {

  airportData: any = [];
  constructor(private apiAirport: AirportService) { }

  ngOnInit(): void {
  }

  getAirport(){
    this.apiAirport.getEDDB()
    .subscribe(data => {
      for (const d of (data as any)) {
          this.airportData.push({
            firstSeen: d.firstSeen
          });
        }
    });
    console.log(this.airportData);
  }
}
