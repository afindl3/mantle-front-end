import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopersComponent } from './developers.component';
import { DeveloperProgramComponent } from './developer-program/developer-program.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopersComponent,
    children: [
      {
        path: 'developer-program',
        component: DeveloperProgramComponent,
      },
      {
        path: 'partner-program',
        loadChildren: () => import('./partner-program/partner-program.module').then((m) => m.PartnerProgramModule),
      },
      {
        path: 'insights',
        loadChildren: () => import('./insights/insights.module').then((m) => m.InsightsModule),
      },
      {
        path: 'supported-networks',
        loadChildren: () =>
          import('./supported-networks/supported-networks.module').then((m) => m.SupportedNetworksModule),
      },
      {
        path: '',
        redirectTo: 'developer-program',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopersRoutingModule {}
