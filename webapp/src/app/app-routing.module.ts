import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about/about-page/about-page.component';
import { ContactPageComponent } from './components/contact/contact-page/contact-page.component';
import { CreatePageComponent } from './components/create/create-page/create-page.component';
import { LoadPageComponent } from './components/load/load-page/load-page.component';
import { StartPageComponent } from './components/start/start-page/start-page.component';

const routes: Routes = [
  {path: 'start', component: StartPageComponent},
  {path: 'create', component: CreatePageComponent},
  {path: 'load', component: LoadPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
