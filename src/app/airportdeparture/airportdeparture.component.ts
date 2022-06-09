import { Component, OnInit } from '@angular/core';
import { AirportService } from '../Services/airportService/airport.service';

@Component({
  selector: 'app-airportdeparture',
  templateUrl: './airportdeparture.component.html',
  styleUrls: ['./airportdeparture.component.scss']
})
export class AirportdepartureComponent implements OnInit {

  airportDataDep: any = [];
  Daten:any;
  data: any;
  error: any;

  constructor(private apiAirport: AirportService) { }

  ngOnInit(): void {
    this.getAirportDep();
    setInterval(()=> {if(this.error){ this.getAirportDep()} }, 180 * 1000)
  }

  getAirportDep(){
    this.apiAirport.getEDDBDep().subscribe((data) => {
      this.airportDataDep = [];
      this.Daten = data.data.items;
      for (const d of (this.Daten as any)) {
        this.airportDataDep.push({
           airlineCode: d.airline_code,
           airline: d.airline_name,
           from: d.arr_airport_name,
           number: d.flight_number.replace(/\D/g, ""),
           status: d.flight_status_label,
           actual: d.dep_estimated_time,
           planned:  d.dep_scheduled_time,
           aircraft: d.aircraft_type,
           imgSrc: 'https://ber.berlin-airport.de/content/dam/bsb/no-language/airlinelogos/'+d.airline_code.toLowerCase()+'.jpg'
        });
      
    }
    },
    err => this.error = err.ok,
    );
  }

}
