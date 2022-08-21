import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import { HauptbahnhofComponent } from './hauptbahnhof/hauptbahnhof.component';
import { GruenbergComponent } from './gruenberg/gruenberg.component';
import { DatestampComponent } from './datestamp/datestamp.component';
import { AirportarrivalComponent } from './airportarrival/airportarrival.component';
import { AirportdepartureComponent } from './airportdeparture/airportdeparture.component';
import { DetectStatusComponent } from './detect-status/detect-status.component';
import { AirportSelectComponent } from './airport-select/airport-select.component';
import { SBahnDialogComponent } from './sbahn-dialog/sbahn-dialog.component';
import { HauptbahnhofDetailsComponent } from './hauptbahnhof-details/hauptbahnhof-details.component';
import { ManualAirportRequestComponent } from './manual-airport-request/manual-airport-request.component';
import { AppRoutingModule } from './app-routing.module';
import { BlackScreenComponent } from './black-screen/black-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HauptbahnhofComponent,
    GruenbergComponent,
    DatestampComponent,
    AirportarrivalComponent,
    AirportdepartureComponent,
    DetectStatusComponent,
    AirportSelectComponent,
    SBahnDialogComponent,
    HauptbahnhofDetailsComponent,
    ManualAirportRequestComponent,
    BlackScreenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    HttpClientModule,
    MatRippleModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
