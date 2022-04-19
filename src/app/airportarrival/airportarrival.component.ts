import { Component, OnInit } from '@angular/core';
import { AirportService } from '../Services/airportService/airport.service';

@Component({
  selector: 'app-airportarrival',
  templateUrl: './airportarrival.component.html',
  styleUrls: ['./airportarrival.component.scss']
})
export class AirportarrivalComponent implements OnInit {

  airportData: any = [];
  name:any;
  
  constructor(private apiAirport: AirportService) { }

  ngOnInit(): void {
  this.getAirport();
  console.log("AIRPORT DATA " ,this.airportData);
  }

  getAirport() {
    this.apiAirport.getEDDB()
      .subscribe((data) => {
        this.airportData = [];
        //for (const d of (data as any)) {
          this.airportData.push({
             data
          });
        
      //}
      });
  }


}
