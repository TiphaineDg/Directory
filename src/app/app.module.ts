import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { ContactsXComponent } from './contacts-x/contacts-x.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnuaireComponent,
    ContactsXComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
