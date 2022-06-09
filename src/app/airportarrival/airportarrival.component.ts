import { Component, OnInit, OnDestroy } from '@angular/core';
import { AirportService } from '../Services/airportService/airport.service';

@Component({
  selector: 'app-airportarrival',
  templateUrl: './airportarrival.component.html',
  styleUrls: ['./airportarrival.component.scss']
})
export class AirportarrivalComponent implements OnInit, OnDestroy {

  airportDataArr: any = [];
  Daten:any;
  data: any;
  airport: any;
  err:any;
  
  constructor(private apiAirport: AirportService) { }

  ngOnInit(): void {
    this.getAirportArr();
    setInterval(()=> {if(this.err){this.getAirportArr()} }, 180 * 1000);
  }
  ngOnDestroy():void{
    this.airport.unsubscribe();
  }

  getAirportArr(){
   this.airport = this.apiAirport.getEDDBArr().subscribe((data) => {
      this.airportDataArr = [];
      this.Daten = data.data.items;
      for (const d of (this.Daten as any)) {
        this.airportDataArr.push({
           airlineCode: d.airline_code,
           airline: d.airline_name,
           from: d.dep_airport_name,
           number: d.flight_number.replace(/\D/g, ""),
           status: d.flight_status_label,
           actual: d.arr_estimated_time,
           planned:  d.arr_scheduled_time,
           aircraft: d.aircraft_type,
           imgSrc: 'https://ber.berlin-airport.de/content/dam/bsb/no-language/airlinelogos/'+d.airline_code.toLowerCase()+'.jpg'
        });
      
    }
    },
    err => this.err = err.ok,
    );
    
  }

  checkArrayStatus():boolean{
    if(this.airportDataArr.length()>0){
      return true;
    }
    else
      return false;
  }

}
