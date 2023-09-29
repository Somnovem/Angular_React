import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { BiographyComponent } from './biography/biography.component';
import { QuotesComponent } from './quotes/quotes.component';
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTitleComponent,
    BiographyComponent,
    QuotesComponent,
    SourcesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
