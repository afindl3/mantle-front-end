import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportedNetworksComponent } from './supported-networks.component';

const routes: Routes = [{ path: '', component: SupportedNetworksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportedNetworksRoutingModule { }
