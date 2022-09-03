import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-loading',
  templateUrl: './station-loading.component.html',
  styleUrls: ['./station-loading.component.scss']
})
export class StationLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loadingContainersNumber = new Array(5);

}
