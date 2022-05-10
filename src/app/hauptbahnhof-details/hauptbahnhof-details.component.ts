import { Component, Input, OnInit } from '@angular/core';
import { HaupbahnhofDetailServiceService } from '../Services/hauptbahnhofDetailService/haupbahnhof-detail.service';

@Component({
  selector: 'app-hauptbahnhof-details',
  templateUrl: './hauptbahnhof-details.component.html',
  styleUrls: ['./hauptbahnhof-details.component.scss']
})
export class HauptbahnhofDetailsComponent implements OnInit {
  @Input() tripId:any;

  constructor(private hbfApi: HaupbahnhofDetailServiceService) { }

  hbfDetails:any = [];
  herkunft:any;

  ngOnInit(): void {
    this.getDetails();
  }

   getDetails(){
     this.hbfApi.getHbfDetails(this.tripId).subscribe(
       data => {
         this.hbfDetails = [];
         for(const d of (data.stopovers as any)){
          this.hbfDetails.push({
           
          herkunft: d.stop.name
          });
         }
        });
     console.log(this.hbfDetails[0].herkunft);
    }
  
}
