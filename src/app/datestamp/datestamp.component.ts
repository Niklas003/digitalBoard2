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

  ngOnInit(): void {
    setInterval(()=> { this.getTime() }, 5 * 1000);
  }

  getTime(){
    this.date = new Date();
  }
}
