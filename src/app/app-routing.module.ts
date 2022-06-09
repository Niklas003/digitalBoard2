import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruenbergComponent } from './gruenberg/gruenberg.component';
import { HauptbahnhofComponent } from './hauptbahnhof/hauptbahnhof.component';


const routes: Routes = [
  {path: 'gruenberg', component: GruenbergComponent},
  {path: 'hauptbahnhof', component: HauptbahnhofComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
