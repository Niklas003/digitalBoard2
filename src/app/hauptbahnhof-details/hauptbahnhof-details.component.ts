import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HaupbahnhofDetailServiceService } from '../Services/hauptbahnhofDetailService/haupbahnhof-detail.service';
import iceData from '../../assets/staticData/ICEnumbers2023.json';

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
  notice:string;
  mobile:boolean = false;
  iceFound:boolean = false;

  ngOnInit(): void {
    this.getDetails();
    this.getICEType(this.data.product, this.data.line);
    if (window.innerWidth <= 768) { // 768px portrait
      this.mobile = true;
    }
  }

   getDetails(){
     this.hbfApi.getHbfDetails(this.data.id).subscribe(
       data => {
         this.hbfDetails = [];
         for(const d of (data.trip.stopovers as any)){
          this.hbfDetails.push({
          depDelay: d.departureDelay/60,
          arrDelay: d.arrivalDelay/60,
          planDep: d.plannedDeparture,
          planArr: d.plannedArrival,  
          platformArr: d.arrivalPlatform,
          platformDep: d.departurePlatform, 
          station: d.stop.name,
          stopCancelled: d.cancelled,
          });
         }
        });
    }
    
    getICEType(product:any, line:any){  
      if(product == 'ICE'){
        for(const ice of (iceData as any)){
          if(line == ice.Zugnummer){
            this.iceType = ice.Tfz;
            this.notice = ice.Hinweis;
            this.imgUrl = '/assets/pictures/'+this.iceType.slice(0, 5).split(' ').join('-')+'.png'
            this.iceFound = true;
          }
        }
      }
    }

    loading(){
      this.isLoading = true;
    }
  
}
