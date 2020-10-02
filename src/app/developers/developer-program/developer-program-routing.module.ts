import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeveloperProgramComponent } from './developer-program.component';

const routes: Routes = [{ path: '', component: DeveloperProgramComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeveloperProgramRoutingModule {}
