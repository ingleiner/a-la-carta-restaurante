import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NotpagesfoundComponent } from './notpagesfound/notpagesfound.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    HomeComponent,
    NotpagesfoundComponent,
    MenuComponent,
    DetailsComponent,
    PagesComponent,
  ],
  exports: [
    HomeComponent,
    NotpagesfoundComponent,
    MenuComponent,
    DetailsComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
