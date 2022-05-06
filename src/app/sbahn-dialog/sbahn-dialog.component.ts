import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TrainData } from '../gruenberg/gruenberg.component';


@Component({
  selector: 'app-sbahn-dialog',
  templateUrl: './sbahn-dialog.component.html',
  styleUrls: ['./sbahn-dialog.component.scss']
})
export class SBahnDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TrainData,) { }

  ngOnInit(): void {
  }

}
