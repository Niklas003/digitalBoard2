import { Component, OnInit } from '@angular/core';
import { StationService } from '../Services/stationService/station.service';
import { MatDialog } from '@angular/material/dialog';
import { SBahnDialogComponent } from '../sbahn-dialog/sbahn-dialog.component';
import { Subscription } from 'rxjs';

export interface TrainData {
  line: string;
  actual: any;
  direction:any;
  cancelled:boolean;
  id:string;
  status:string;
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
  subs:Subscription;
  intervall:any;

  constructor(private api: StationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStationGruenberg();
    this.updateData();
  }

  ngOnDestroy():void{
    clearInterval(this.intervall);
    this.subs.unsubscribe();
  }

  updateData(){
    this.intervall =  setInterval(()=> { this.getStationGruenberg() }, 15 * 1000);
  }

  getStationGruenberg() {
   this.subs = this.api.getGruenberg()
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
            status: this.setTrafficLightStatus(d.when, d.cancelled)
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

  openDialog(line:string, actual:any, direction:string, cancelled:boolean, id:string,status:string){
    this.dialog.open(SBahnDialogComponent,
      {
        width: '500px',
        data: {line: line,
              actual: actual,
              direction: direction,
              cancelled: cancelled,
              id:id,
              status:status},
      });
  }

  setTrafficLightStatus(time:any, cancelled:any):any{
    if(this.getDiff(time)>450000){return "s-bahn"}  //s-bahn
    if(this.getDiff(time)<=450000 && this.getDiff(time) >= 250000 && !cancelled){return "gelb"} //gelb
    if(this.getDiff(time)<250000 || cancelled){return "regio"} //regio
    if(this.getDiff(time)<= 0 && !cancelled){return "depart-now"} //depart-now
  }

}
