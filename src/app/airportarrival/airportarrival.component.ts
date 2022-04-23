import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AirportService } from '../Services/airportService/airport.service';

@Component({
  selector: 'app-airportarrival',
  templateUrl: './airportarrival.component.html',
  styleUrls: ['./airportarrival.component.scss']
})
export class AirportarrivalComponent implements OnInit {

  airportDataArr: any = [];
  Daten:any;
  data: any;
  
  constructor(private apiAirport: AirportService, private app: AppComponent) { }

  ngOnInit(): void {
    this.getAirportArr();
  }

  getAirportArr(){
    this.apiAirport.getEDDBArr().subscribe((data) => {
      this.Daten = data.data.items;
      for (const d of (this.Daten as any)) {
        this.airportDataArr.push({
           airlineCode: d.airline_code,
           airline: d.airline_name,
           from: d.dep_airport_name,
           number: d.flight_number.replace(/\D/g, ""),
           status: d.flight_status_id,
           planned: d.arr_estimated_time,
           actual:  d.arr_scheduled_time,
           gate: d.gate,
        });
      
    }
    console.log('AIRPORT DATA: ', this.airportDataArr);
    });
  }



}
