import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalTechComponent } from './legal-tech.component';

const routes: Routes = [{ path: '', component: LegalTechComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalTechRoutingModule { }
