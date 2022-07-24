import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TrainData } from '../gruenberg/gruenberg.component';
import { GruenbergDetailService } from '../Services/gruenbergDetailService/gruenberg-detail.service';


@Component({
  selector: 'app-sbahn-dialog',
  templateUrl: './sbahn-dialog.component.html',
  styleUrls: ['./sbahn-dialog.component.scss']
})
export class SBahnDialogComponent implements OnInit {

  arrival: any;
  result:any;
  treptow: boolean = false;
  treptowArrival: any;
  schoeneweide: boolean = false;
  schoeneweideArrival:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TrainData, public gruenbergDet: GruenbergDetailService) { }

  ngOnInit(): void { 
    this.getDetails();
  }

  getArrivalTime(actual: any, addTime:any):Date{ //used to ETA Work +27min HWR +50min
    this.result =  new Date(actual).setSeconds(new Date(actual).getSeconds() + addTime*60);
    return this.result
   }

   getDetails(){
    this.gruenbergDet.getGruenbergDetails(this.data.id).subscribe(
      data => {
        for(const d of (data.stopovers as any)){
          if(d.stop.name == "Berlin-Schöneweide (S)" && !this.schoeneweide){ //look if the train stops at schöneweide
          this.schoeneweide = true;
          this.schoeneweideArrival = new Date(d.departure);
          this.schoeneweideArrival =  this.schoeneweideArrival.setMinutes(this.schoeneweideArrival.getMinutes() + 28);
        }

          if(d.stop.name == "Berlin Treptower Park" && !this.treptow){  //look if train stops at Treptower Park
            this.treptow = true;
            this.treptowArrival = new Date(d.departure);
            this.treptowArrival =  this.treptowArrival.setMinutes(this.treptowArrival.getMinutes() + 5);
          }
        }
       });
   }
}
