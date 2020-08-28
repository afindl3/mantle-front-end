import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsComponent } from './insights.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [InsightsComponent],
  imports: [CommonModule, InsightsRoutingModule, SharedModule],
})
export class InsightsModule {}
