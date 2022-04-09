import { Component, OnInit } from '@angular/core';
import { StationService } from '../station.service';

@Component({
  selector: 'app-gruenberg',
  templateUrl: './gruenberg.component.html',
  styleUrls: ['./gruenberg.component.scss']
})
export class GruenbergComponent implements OnInit {

  stationGruenberg:any = [];
  sub:any;
  timeDiff:any;
  plannedTime:any;

  constructor(private api: StationService) { }

  ngOnInit(): void {
    this.getStationGruenberg();
    setInterval(()=> { this.getStationGruenberg() }, 60 * 1000);
  }

  getStationGruenberg() {
   this.sub = this.api.getGruenberg()
      .subscribe(data => {
        this.stationGruenberg = [];
        for (const d of (data as any)) {
        if(d.line.productName === 'S'){
          this.stationGruenberg.push({
  
            name: d.stop.name,
            planned: d.plannedWhen,
            delay: d.delay /60,
            platform: d.platform,
            direction: d.direction,
            line: d.line.name.replace(/\D/g, ""),
            product: d.line.productName,
            info: d.remarks[0],
            cancelled: d.cancelled,
  
          });
        }
      }
      });
  }

  getDiff(planned:any): number{
    this.sub = new Date();
    this.plannedTime=  new Date(planned);
    this.timeDiff = this.plannedTime - this.sub;
    return this.timeDiff;
  }

}
