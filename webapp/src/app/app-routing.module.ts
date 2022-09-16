import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about/about-page/about-page.component';
import { ContactPageComponent } from './components/contact/contact-page/contact-page.component';
import { ControlPageComponent } from './components/control/control-page/control-page.component';
import { DeletionComponent } from './components/control/deletion/deletion.component';
import { GroupingComponent } from './components/control/grouping/grouping.component';
import { ModificationComponent } from './components/control/modification/modification.component';
import { OverviewComponent } from './components/control/overview/overview.component';
import { CreatePageComponent } from './components/create/create-page/create-page.component';
import { LoadPageComponent } from './components/load/load-page/load-page.component';
import { StartPageComponent } from './components/start/start-page/start-page.component';

const routes: Routes = [
  {path: 'start', component: StartPageComponent},
  {path: 'create', component: CreatePageComponent},
  {path: 'load', component: LoadPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'control', component: ControlPageComponent, children: [
    {path: 'overview', component: OverviewComponent, outlet: 'secondary'},
    {path: 'modification', component: ModificationComponent, outlet: 'secondary'},
    {path: 'grouping', component: GroupingComponent, outlet: 'secondary'},
    {path: 'deletion', component: DeletionComponent, outlet: 'secondary'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
