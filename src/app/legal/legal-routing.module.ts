import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalComponent } from './legal.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: LegalComponent,
    children: [
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'terms',
        loadChildren: () => import('./terms/terms.module').then((m) => m.TermsModule),
      },
      {
        path: '',
        redirectTo: 'privacy-policy',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalRoutingModule {}
