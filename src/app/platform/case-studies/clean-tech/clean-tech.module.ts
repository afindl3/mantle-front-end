import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CleanTechRoutingModule } from './clean-tech-routing.module';
import { CleanTechComponent } from './clean-tech.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [CleanTechComponent],
  imports: [CommonModule, CleanTechRoutingModule, SharedModule],
})
export class CleanTechModule {}
