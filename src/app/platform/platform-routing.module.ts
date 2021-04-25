import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatformComponent } from './platform.component';
import { WhatIsMantleComponent } from './what-is-mantle/what-is-mantle.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent,
    children: [
      {
        path: 'what-is-mantle',
        component: WhatIsMantleComponent,
      },
      {
        path: 'advanced-cybersecurity',
        loadChildren: () => import('./advanced-cybersecurity/advanced-cybersecurity.module').then((m) => m.AdvancedCybersecurityModule),
      },
      {
        path: 'privacy-data-compliance',
        loadChildren: () => import('./privacy-data/privacy-data.module').then((m) => m.PrivacyDataModule),
      },
      {
        path: 'future-proof-architecture',
        loadChildren: () => import('./future-proof/future-proof.module').then((m) => m.FutureProofModule),
      },
      {
        path: 'pricing',
        loadChildren: () => import('./pricing/pricing.module').then((m) => m.PricingModule),
      },
      {
        path: '',
        redirectTo: 'what-is-mantle',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule { }
