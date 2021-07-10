import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PastryComponent } from './pastry/pastry.component';
import { ChocolatierComponent } from './chocolatier/chocolatier.component';
import { BakeryComponent } from './bakery/bakery.component';


@NgModule({
  declarations: [
    PastryComponent,
    ChocolatierComponent,
    BakeryComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
