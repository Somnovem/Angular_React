import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ButtonsTask3Component } from './buttons-task3/buttons-task3.component';
import { InfoTask3Component } from './info-task3/info-task3.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    MyProjectsComponent,
    ButtonsTask3Component,
    InfoTask3Component
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
