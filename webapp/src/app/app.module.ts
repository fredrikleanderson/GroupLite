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
import { CreateStudentFormComponent } from './components/forms/students/create-student-form/create-student-form.component';
import { StudentListComponent } from './components/lists/student-list/student-list.component';
import { StudentListElementComponent } from './components/lists/student-list/student-list-element/student-list-element.component';
import { CreateUnitFormComponent } from './components/forms/units/create-unit-form/create-unit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutPageComponent,
    ContactPageComponent,
    CreatePageComponent,
    LoadPageComponent,
    StartPageComponent,
    CreateStudentFormComponent,
    StudentListComponent,
    StudentListElementComponent,
    CreateUnitFormComponent
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
