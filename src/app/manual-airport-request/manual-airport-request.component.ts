import { Component, OnInit } from '@angular/core';
import { AirportarrivalComponent } from '../airportarrival/airportarrival.component';

@Component({
  selector: 'app-manual-airport-request',
  templateUrl: './manual-airport-request.component.html',
  styleUrls: ['./manual-airport-request.component.scss']
})
export class ManualAirportRequestComponent implements OnInit {

  constructor(private AirportArr: AirportarrivalComponent) { }

  ngOnInit(): void {
  }

  loadData(){
    this.AirportArr.getAirportArr();
  }

}
