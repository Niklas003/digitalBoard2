import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HaupbahnhofDetailServiceService } from '../Services/hauptbahnhofDetailService/haupbahnhof-detail.service';
import iceData from '../../assets/staticData/ICEnumbers.json';

@Component({
  selector: 'app-hauptbahnhof-details',
  templateUrl: './hauptbahnhof-details.component.html',
  styleUrls: ['./hauptbahnhof-details.component.scss']
})
export class HauptbahnhofDetailsComponent implements OnInit {

  constructor(private hbfApi: HaupbahnhofDetailServiceService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  hbfDetails:any = [];
  herkunft:any;
  iceData:any = iceData;
  iceType:any;
  imgUrl:any;
  isLoading:boolean;

  ngOnInit(): void {
    this.getDetails();
    this.getICEType(this.data.product, this.data.line);
    
  }

   getDetails(){
     this.hbfApi.getHbfDetails(this.data.id).subscribe(
       data => {
         this.hbfDetails = [];
         for(const d of (data.stopovers as any)){
          this.hbfDetails.push({
          depDelay: d.departureDelay/60,
          arrDelay: d.arrivalDelay/60,
          planDep: d.plannedDeparture,
          planArr: d.plannedArrival,  
          platformArr: d.arrivalPlatform,
          platformDep: d.departurePlatform, 
          station: d.stop.name,
          stopCancelled: d.cancelled
          });
         }
        });
    }

    getICEType(product:any, line:any){  
      if(product == 'ICE'){
        for(const ice of (iceData as any)){
          if(line == ice.Zugnummer){
            this.iceType = ice.Tfz
            this.imgUrl = '/assets/pictures/'+this.iceType.slice(0, 5).split(' ').join('-')+'.png'
          }
        }
      }
    }

    loading(){
      this.isLoading = true;
    }
  
}
