import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalTechRoutingModule } from './legal-tech-routing.module';
import { LegalTechComponent } from './legal-tech.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [LegalTechComponent],
  imports: [CommonModule, LegalTechRoutingModule, SharedModule],
})
export class LegalTechModule {}
