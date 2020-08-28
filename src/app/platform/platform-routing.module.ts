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
