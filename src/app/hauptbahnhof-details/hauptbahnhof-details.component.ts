import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HaupbahnhofDetailServiceService } from '../Services/hauptbahnhofDetailService/haupbahnhof-detail.service';

@Component({
  selector: 'app-hauptbahnhof-details',
  templateUrl: './hauptbahnhof-details.component.html',
  styleUrls: ['./hauptbahnhof-details.component.scss']
})
export class HauptbahnhofDetailsComponent implements OnInit {

  constructor(private hbfApi: HaupbahnhofDetailServiceService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  hbfDetails:any = [];
  herkunft:any;

  ngOnInit(): void {
    this.getDetails();
  }

   getDetails(){
     this.hbfApi.getHbfDetails(this.data.id).subscribe(
       data => {
         this.hbfDetails = [];
         this.hbfDetails.push({
           name: data.line.name,
           cancelled: data.cancelled
         });
         for(const d of (data.stopovers as any)){
          this.hbfDetails.push({
          depDelay: d.departureDelay/60,
          planDep: d.plannedDeparture,  
          platformArr: d.arrivalPlatform,
          platformDep: d.departurePlatform, 
          station: d.stop.name,
          });
         }
        });
    }
  
}
