import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { LegalComponent } from './legal.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LegalComponent, PrivacyPolicyComponent],
  imports: [CommonModule, LegalRoutingModule, SharedModule],
})
export class LegalModule {}
