import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuditPortalComponent } from './audit-portal.component';

const routes: Routes = [{ path: '', component: AuditPortalComponent }];

@NgModule({
  declarations: [AuditPortalComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuditPortalModule {}
