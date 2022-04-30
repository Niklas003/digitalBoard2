import { Component, OnInit } from '@angular/core';
import { StationService } from '../Services/stationService/station.service';


@Component({
  selector: 'app-hauptbahnhof',
  templateUrl: './hauptbahnhof.component.html',
  styleUrls: ['./hauptbahnhof.component.scss']
})
export class HauptbahnhofComponent implements OnInit {

  stationData: any = [];

  constructor(private api: StationService) { }

  ngOnInit(): void {
    this.getStationData();
    setInterval(()=> { this.getStationData() }, 30 * 1000);
  }

 getStationData() {
  this.api.getHbf()
    .subscribe(data => {
      this.stationData = [];
      for (const d of (data as any)) {
      if(d.line.productName !== 'Bus' && d.line.productName !== 'U' && d.line.productName !== 'S' && d.line.productName !== 'STR'){
        this.stationData.push({

          name: d.stop.name,
          planned: d.plannedWhen,
          delay: d.delay /60,
          platform: d.platform,
          direction: d.direction,
          line: d.line.name.replace(/\D/g, ""),
          product: d.line.productName,
          info: d.remarks[0],
          cancelled: d.cancelled

        });
      }
    }
    });
}

identifyIfEqual(item:any) {   //IMPORTANT Refresh data only if there is any change
  return item.id;
}
}