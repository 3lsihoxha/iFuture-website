import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { CompanyComponent } from './company/company.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    CompanyComponent,
    CalendarComponent,
    ContactComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
