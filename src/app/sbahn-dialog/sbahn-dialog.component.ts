import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TrainData } from '../gruenberg/gruenberg.component';


@Component({
  selector: 'app-sbahn-dialog',
  templateUrl: './sbahn-dialog.component.html',
  styleUrls: ['./sbahn-dialog.component.scss']
})
export class SBahnDialogComponent implements OnInit {

  arrival: any;
  result:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TrainData) { }

  ngOnInit(): void {
    this.arrival = this.getArrivalTime(this.data.actual);
  }

  getArrivalTime(actual: any):Date{ //used to get actual departure time, with delay
    this.result =  new Date(actual).setSeconds(new Date(actual).getSeconds() + 27*60);
    return this.result
   }
}
