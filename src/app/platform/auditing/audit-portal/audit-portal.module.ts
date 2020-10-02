import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuditPortalComponent } from './audit-portal.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [{ path: '', component: AuditPortalComponent }];

@NgModule({
  declarations: [AuditPortalComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AuditPortalModule {}
