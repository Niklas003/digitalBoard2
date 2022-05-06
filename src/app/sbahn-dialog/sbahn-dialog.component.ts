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

  ngOnInit(): void { }

  getArrivalTime(actual: any, addTime:any):Date{ //used to ETA Work +27min HWR +50min
    this.result =  new Date(actual).setSeconds(new Date(actual).getSeconds() + addTime*60);
    return this.result
   }
}
