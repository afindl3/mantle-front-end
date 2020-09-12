import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalTechRoutingModule } from './legal-tech-routing.module';
import { LegalTechComponent } from './legal-tech.component';


@NgModule({
  declarations: [LegalTechComponent],
  imports: [
    CommonModule,
    LegalTechRoutingModule
  ]
})
export class LegalTechModule { }
