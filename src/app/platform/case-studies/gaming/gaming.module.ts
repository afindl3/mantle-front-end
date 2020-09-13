import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamingRoutingModule } from './gaming-routing.module';
import { GamingComponent } from './gaming.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [GamingComponent],
  imports: [CommonModule, GamingRoutingModule, SharedModule],
})
export class GamingModule {}
