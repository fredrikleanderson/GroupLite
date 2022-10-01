import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPageComponent } from './components/control/control-page/control-page.component';
import { GroupingComponent } from './components/control/grouping/grouping.component';
import { OverviewComponent } from './components/control/overview/overview.component';
import { CreatePageComponent } from './components/create/create-page/create-page.component';
import { LoadPageComponent } from './components/load/load-page/load-page.component';
import { StartPageComponent } from './components/start/start-page/start-page.component';

const routes: Routes = [
  {path: 'start', component: StartPageComponent},
  {path: 'create', component: CreatePageComponent},
  {path: 'load', component: LoadPageComponent},
  {path: 'control', component: ControlPageComponent, children: [
    {path: 'overview', component: OverviewComponent, outlet: 'secondary'},
    {path: 'grouping', component: GroupingComponent, outlet: 'secondary'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
