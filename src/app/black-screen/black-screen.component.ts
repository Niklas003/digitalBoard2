import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-screen',
  templateUrl: './black-screen.component.html',
  styleUrls: ['./black-screen.component.scss']
})
export class BlackScreenComponent implements OnInit {
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
