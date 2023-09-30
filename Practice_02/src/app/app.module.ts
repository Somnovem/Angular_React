import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HamletMonologueComponent } from './hamlet-monologue/hamlet-monologue.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HelloWorldComponent,
    HamletMonologueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
