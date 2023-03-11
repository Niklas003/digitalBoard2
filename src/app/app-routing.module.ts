import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GruenbergComponent } from './gruenberg/gruenberg.component';
import { HauptbahnhofComponent } from './hauptbahnhof/hauptbahnhof.component';


const routes: Routes = [
  {path: 'gruenberg', component: GruenbergComponent},
  {path: 'hauptbahnhof', component: HauptbahnhofComponent},
  {path: 'appScreen', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
