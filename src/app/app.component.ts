import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'digitalBoard';
  result:any;
  
  getArrivalTime(actual: any):Date{ //used to get actual departure time, with delay
    this.result =  new Date(actual).setSeconds(new Date(actual).getSeconds() + 27);
    return this.result
   }
}
