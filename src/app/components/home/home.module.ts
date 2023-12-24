import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardsComponent } from './cards/cards.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { LoginComponent } from './login/login.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownTriggerForDirective } from './dropdown/dropdown-trigger-for.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    HeroBannerComponent,
    LoginComponent,
    DropdownComponent,
    DropdownTriggerForDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OverlayModule,
    FormsModule
  ]
})
export class HomeModule { }
