import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CreatePageComponent } from './components/create/create-page/create-page.component';
import { LoadPageComponent } from './components/load/load-page/load-page.component';
import { StartPageComponent } from './components/start/start-page/start-page.component';
import { LoadUnitFormComponent } from './components/forms/load-unit-form/load-unit-form.component';
import { ControlPageComponent } from './components/control/control-page/control-page.component';
import { MemberListComponent } from './components/lists/member-list/member-list.component';
import { MemberListElementComponent } from './components/lists/member-list/member-list-element/member-list-element.component';
import { CreateMemberFormComponent } from './components/forms/create-member-form/create-member-form.component';
import { OverviewComponent } from './components/control/overview/overview.component';
import { GroupingComponent } from './components/control/grouping/grouping.component';
import { DeleteUnitFormComponent } from './components/forms/delete-unit-form/delete-unit-form.component';
import { GenerateGroupsFormComponent } from './components/forms/generate-groups-form/generate-groups-form.component';
import { GroupListComponent } from './components/lists/group-list/group-list.component';
import { CreateOwnerFormComponent } from './components/forms/create-owner-form/create-owner-form.component';
import { DisplayOwnerComponent } from './components/display/display-owner/display-owner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    CreatePageComponent,
    LoadPageComponent,
    StartPageComponent,
    LoadUnitFormComponent,
    ControlPageComponent,
    MemberListComponent,
    MemberListElementComponent,
    CreateMemberFormComponent,
    OverviewComponent,
    GroupingComponent,
    DeleteUnitFormComponent,
    GenerateGroupsFormComponent,
    GroupListComponent,
    CreateOwnerFormComponent,
    DisplayOwnerComponent
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
