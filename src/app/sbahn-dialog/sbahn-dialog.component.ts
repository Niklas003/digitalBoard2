import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { TrainData } from '../gruenberg/gruenberg.component';


@Component({
  selector: 'app-sbahn-dialog',
  templateUrl: './sbahn-dialog.component.html',
  styleUrls: ['./sbahn-dialog.component.scss']
})
export class SBahnDialogComponent implements OnInit {

  arrival: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: TrainData) { }

  ngOnInit(): void {
  }

}
