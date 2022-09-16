import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutPageComponent } from './components/about/about-page/about-page.component';
import { ContactPageComponent } from './components/contact/contact-page/contact-page.component';
import { CreatePageComponent } from './components/create/create-page/create-page.component';
import { LoadPageComponent } from './components/load/load-page/load-page.component';
import { StartPageComponent } from './components/start/start-page/start-page.component';
import { LoadUnitFormComponent } from './components/forms/load-unit-form/load-unit-form.component';
import { ControlPageComponent } from './components/control/control-page/control-page.component';
import { MemberListComponent } from './components/lists/member-list/member-list.component';
import { MemberListElementComponent } from './components/lists/member-list/member-list-element/member-list-element.component';
import { CreateUnitFormComponent } from './components/forms/create-unit-form/create-unit-form.component';
import { CreateMemberFormComponent } from './components/forms/create-member-form/create-member-form.component';
import { UnitOverviewComponent } from './components/control/unit-overview/unit-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutPageComponent,
    ContactPageComponent,
    CreatePageComponent,
    LoadPageComponent,
    StartPageComponent,
    LoadUnitFormComponent,
    ControlPageComponent,
    MemberListComponent,
    MemberListElementComponent,
    CreateUnitFormComponent,
    CreateMemberFormComponent,
    UnitOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
