import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditingRoutingModule } from './auditing-routing.module';
import { AuditingComponent } from './auditing.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AuditingComponent],
  imports: [CommonModule, AuditingRoutingModule, SharedModule],
})
export class AuditingModule {}
