import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home1RoutingModule } from './home1-routing.module';
import { Home3Component } from './home1.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [Home3Component],
  imports: [Home1RoutingModule, CommonModule, SharedModule],
})
export class Home1Module {}
