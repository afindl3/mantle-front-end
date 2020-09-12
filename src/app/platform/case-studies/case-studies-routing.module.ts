import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseStudiesComponent } from './case-studies.component';

const routes: Routes = [
  {
    path: '',
    component: CaseStudiesComponent,
  },
  {
    path: 'legal-tech',
    loadChildren: () => import('./legal-tech/legal-tech.module').then((m) => m.LegalTechModule),
  },
  {
    path: 'gaming',
    loadChildren: () => import('./gaming/gaming.module').then((m) => m.GamingModule),
  },
  {
    path: 'clean-tech',
    loadChildren: () => import('./clean-tech/clean-tech.module').then((m) => m.CleanTechModule),
  },
  {
    path: 'kyc',
    loadChildren: () => import('./kyc/kyc.module').then((m) => m.KycModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseStudiesRoutingModule {}
