import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerProgramRoutingModule } from './partner-program-routing.module';
import { PartnerProgramComponent } from './partner-program.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PartnerProgramComponent],
  imports: [CommonModule, PartnerProgramRoutingModule, SharedModule],
})
export class PartnerProgramModule {}
