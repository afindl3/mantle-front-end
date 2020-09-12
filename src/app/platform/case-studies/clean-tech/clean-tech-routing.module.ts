import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CleanTechComponent } from './clean-tech.component';

const routes: Routes = [{ path: '', component: CleanTechComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CleanTechRoutingModule { }
