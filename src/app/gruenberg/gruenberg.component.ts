import { Component, OnInit } from '@angular/core';
import { StationService } from '../Services/stationService/station.service';
import { MatDialog } from '@angular/material/dialog';
import { SBahnDialogComponent } from '../sbahn-dialog/sbahn-dialog.component';

export interface TrainData {
  line: string;
  actual: any;
  direction:any;
  cancelled:boolean;
  id:string;
}

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
  id:any

  constructor(private api: StationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStationGruenberg();
    setInterval(()=> { this.getStationGruenberg() }, 15 * 1000);
  }

  getStationGruenberg() {
   this.sub = this.api.getGruenberg()
      .subscribe((data) => {
        this.stationGruenberg = [];
        for (const d of (data as any)) {
        if(d.line.productName === 'S'){
          this.stationGruenberg.push({
  
            id: d.tripId.replace(/\|/gi,"%7C"),
            name: d.stop.name,
            planned: d.plannedWhen,
            delay: d.delay /60,
            platform: d.platform,
            direction: d.direction,
            line: d.line.name.replace(/\D/g, ""),
            product: d.line.productName,
            info: d.remarks[0],
            cancelled: d.cancelled,
            actual: d.when,
            status: this.setTrafficLightStatus(d.when)
          });
        }
      }
      });
  }

  getDiff(depart:any): number{ //used to get difference in time for traffic lights
    this.sub = new Date();
    this.plannedTime =  new Date(depart);
    this.timeDiff = this.plannedTime - this.sub;
    return this.timeDiff;
  }

  identifyIfEqual(item:any) {     //IMPORTANT Refresh data only if there is any change
    return item.id;
  }

  openDialog(line:string, actual:any, direction:string, cancelled:boolean, id:string){
    this.dialog.open(SBahnDialogComponent,
      {
        width: '500px',
        data: {line: line,
              actual: actual,
              direction: direction,
              cancelled: cancelled,
              id:id},
      });
  }

  setTrafficLightStatus(time:any){}

}
