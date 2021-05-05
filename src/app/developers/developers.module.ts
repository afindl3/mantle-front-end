import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersComponent } from './developers.component';
import { InsightsComponent } from './insights/insights.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DevelopersComponent, InsightsComponent],
  imports: [CommonModule, DevelopersRoutingModule, SharedModule],
})
export class DevelopersModule { }