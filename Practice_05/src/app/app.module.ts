import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ButtonsTransportComponent } from './buttons-transport/buttons-transport.component';
import { InfoTransportComponent } from './info-transport/info-transport.component';
import {FormsModule} from "@angular/forms";
import {SkillsService} from "./skills.service";
import {ExperienceService} from "./experience.service";
import { HobbyComponent } from './hobby/hobby.component';
import {HobbyInfoService} from "./hobby-info.service";
import { HobbyInfoComponent } from './hobby-info/hobby-info.component';
import { WondersComponent } from './wonders/wonders.component';
import {WondersListService} from "./wonders-list.service";
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    MyProjectsComponent,
    ButtonsTransportComponent,
    InfoTransportComponent,
    HobbyComponent,
    HobbyInfoComponent,
    WondersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
      SkillsService,
      ExperienceService,
      HobbyInfoService,
      WondersListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
