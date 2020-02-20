import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FfIntroComponent } from './ff-intro/ff-intro.component';
import { FfHeaderComponent } from './ff-header/ff-header.component';
import { FfMyProjectsComponent } from './ff-my-projects/ff-my-projects.component';
import { FfContactComponent } from './ff-contact/ff-contact.component';
import { FfAptChartsComponent } from './ff-apt-charts/ff-apt-charts.component';
import { FfAptCardComponent } from './ff-apt-card/ff-apt-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import {ChartsModule} from 'ng2-charts';
import { FfAptComponentComponent } from './ff-apt-component/ff-apt-component.component';



@NgModule({
  declarations: [
    AppComponent,
    FfIntroComponent,
    FfHeaderComponent,
    FfMyProjectsComponent,
    FfContactComponent,
    FfAptChartsComponent,
    FfAptCardComponent,
    FfAptComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
