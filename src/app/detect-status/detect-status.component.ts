import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-detect-status',
  templateUrl: './detect-status.component.html',
  styleUrls: ['./detect-status.component.scss']
})
export class DetectStatusComponent implements OnInit {

  onlineStatus:any = true;
  constructor() { }


  ngOnInit(): void {
    setInterval(()=> { this.checkOnline() }, 1000);
  }

  checkOnline():boolean{
    return navigator.onLine;
  };

}
