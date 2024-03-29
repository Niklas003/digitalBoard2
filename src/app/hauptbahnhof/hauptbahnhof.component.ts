import { Component, OnInit } from '@angular/core';
import { StationService } from '../Services/stationService/station.service';
import { MatDialog } from '@angular/material/dialog';
import { HauptbahnhofDetailsComponent } from '../hauptbahnhof-details/hauptbahnhof-details.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hauptbahnhof',
  templateUrl: './hauptbahnhof.component.html',
  styleUrls: ['./hauptbahnhof.component.scss'],
})
export class HauptbahnhofComponent implements OnInit {
  stationData: any = [];
  name: any;
  hauptbahnhofDataSubscription: Subscription;
  interval: any;
  timeUntilRequested: any;

  constructor(private api: StationService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getStationData();
    this.updateData();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.hauptbahnhofDataSubscription.unsubscribe();
  }

  updateData() {
    this.interval = setInterval(() => {
      this.getStationData();
    }, 30 * 1000);
  }

  timeThatisRequested() {
    let timeNow = new Date();
    timeNow.setHours(timeNow.getHours() + 1);
    return timeNow;
  }

  getStationData() {
    this.hauptbahnhofDataSubscription = this.api.getHbf().subscribe((data) => {
      this.stationData = [];
      for (const d of data.departures as any) {
        if (
          d.line.productName !== 'Bus' &&
          d.line.productName !== 'U' &&
          d.line.productName !== 'S' &&
          d.line.productName !== 'STR'
        ) {
          this.stationData.push({
            id: d.tripId.replace(/\|/gi, '%7C'),
            name: d.stop.name,
            planned: d.plannedWhen,
            delay: d.delay / 60,
            platform: d.platform,
            destination: d.destination.name,
            line: d.line.name.replace(/\D/g, ''),
            product: d.line.productName,
            info: d.remarks[0],
            cancelled: d.cancelled,
            actual: d.when,
            operator: d.line.operator.name,
          });
        }
      }
    });
  }

  identifyIfEqual(item: any) {
    //IMPORTANT Refresh data only if there is any change
    return item.id;
  }

  openDetails(id: any, product: any, line: any, operator: string) {
    this.name = product + ' ' + line;
    this.dialog.open(HauptbahnhofDetailsComponent, {
      width: '600px',
      data: {
        id: id,
        name: this.name,
        line: line,
        product: product,
        operator: operator,
      },
    });
  }
}
