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
  
  getDelayTime(planned: any, delay:number):Date{ //used to get actual departure time, with delay
    this.result =  new Date(planned).setSeconds(new Date(planned).getSeconds() + delay);
    return this.result
   }
}
