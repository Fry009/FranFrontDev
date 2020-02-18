import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FfIntroComponent } from './ff-intro/ff-intro.component';
import { FfHeaderComponent } from './ff-header/ff-header.component';
import { FfMyProjectsComponent } from './ff-my-projects/ff-my-projects.component';
import { FfContactComponent } from './ff-contact/ff-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FfIntroComponent,
    FfHeaderComponent,
    FfMyProjectsComponent,
    FfContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
