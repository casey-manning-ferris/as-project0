import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ResidenceComponent } from './residence/residence.component';
import { PropertyComponent } from './property/property.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'residence', component: ResidenceComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'quote', component: QuoteComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
