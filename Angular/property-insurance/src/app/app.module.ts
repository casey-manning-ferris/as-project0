import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { ResidenceComponent } from './residence/residence.component';
import { PropertyComponent } from './property/property.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ResidenceComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
