import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditingComponent } from './auditing.component';

const routes: Routes = [
  {
    path: '',
    component: AuditingComponent,
  },
  {
    path: 'agreement-validation',
    loadChildren: () => import('./agreement-validation/agreement-validation.module').then((m) => m.AgreementValidationModule),
  },
  {
    path: 'data-provenance',
    loadChildren: () => import('./data-provenance/data-provenance.module').then((m) => m.DataProvenanceModule),
  },
  {
    path: 'audit-portal',
    loadChildren: () => import('./audit-portal/audit-portal.module').then((m) => m.AuditPortalModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditingRoutingModule {}
