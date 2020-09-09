import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyComponent } from './privacy.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacyComponent,
  },
  {
    path: 'cross-cloud-storage',
    loadChildren: () => import('./cross-cloud-storage/cross-cloud-storage.module').then((m) => m.CrossCloudStorageModule),
  },
  {
    path: 'distributed-identity',
    loadChildren: () => import('./distributed-identity/distributed-identity.module').then((m) => m.DistributedIdentityModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyRoutingModule {}
