import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatIsMantleComponent } from './what-is-mantle.component';

const routes: Routes = [{ path: '', component: WhatIsMantleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatIsMantleRoutingModule { }
