// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component'; // Ensure this import is correct

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent // Declare HeaderComponent here
  ],
  imports: [
    BrowserModule,
    // other modules...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }