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

  constructor(private api: StationService) { }

  ngOnInit(): void {
    this.getStationGruenberg();
    setInterval(()=> { this.getStationGruenberg() }, 60 * 1000);
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  getStationGruenberg() {
   this.sub = this.api.getGruenberg()
      .subscribe(data => {
        this.stationGruenberg = [];
        for (const d of (data as any)) {
        if(d.line.productName !== 'Bus' && d.line.productName !== 'U'){
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

}
