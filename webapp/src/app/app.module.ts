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
import { OverviewComponent } from './components/control/overview/overview.component';
import { ModificationComponent } from './components/control/modification/modification.component';
import { GroupingComponent } from './components/control/grouping/grouping.component';
import { DeletionComponent } from './components/control/deletion/deletion.component';
import { DeleteUnitFormComponent } from './components/forms/delete-unit-form/delete-unit-form.component';
import { GenerateGroupsFormComponent } from './components/forms/generate-groups-form/generate-groups-form.component';
import { GroupListComponent } from './components/lists/group-list/group-list.component';
import { GroupListElementComponent } from './components/lists/group-list/group-list-element/group-list-element.component';
import { CreateOwnerFormComponent } from './components/forms/create-owner-form/create-owner-form.component';
import { DisplayOwnerComponent } from './components/display/display-owner/display-owner.component';


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
    OverviewComponent,
    ModificationComponent,
    GroupingComponent,
    DeletionComponent,
    DeleteUnitFormComponent,
    GenerateGroupsFormComponent,
    GroupListComponent,
    GroupListElementComponent,
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
