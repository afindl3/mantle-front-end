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
        path: 'what-makes-us-different',
        loadChildren: () =>
          import('./what-makes-us-different/what-makes-us-different.module').then((m) => m.WhatMakesUsDifferentModule),
      },
      {
        path: 'privacy',
        loadChildren: () => import('./privacy/privacy.module').then((m) => m.PrivacyModule),
      },
      {
        path: 'auditing',
        loadChildren: () => import('./auditing/auditing.module').then((m) => m.AuditingModule),
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
export class PlatformRoutingModule {}
