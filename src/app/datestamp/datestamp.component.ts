import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datestamp',
  templateUrl: './datestamp.component.html',
  styleUrls: ['./datestamp.component.scss']
})
export class DatestampComponent implements OnInit {

  constructor() { 
    this.date = new Date();
  }
  public date: Date;
  day:any;

  ngOnInit(): void {
    setInterval(()=> { this.getTime() }, 1000);
  }

  getTime(){
    this.date = new Date();
    this.day = this.date.toLocaleDateString('de-DE', {weekday: 'short'});
  }
}
