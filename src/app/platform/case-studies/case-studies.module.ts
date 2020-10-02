import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { CaseStudiesComponent } from './case-studies.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CaseStudiesComponent],
  imports: [CommonModule, CaseStudiesRoutingModule, SharedModule],
})
export class CaseStudiesModule {}
