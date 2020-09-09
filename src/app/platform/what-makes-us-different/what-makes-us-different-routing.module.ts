import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatMakesUsDifferentComponent } from './what-makes-us-different.component';

const routes: Routes = [{ path: '', component: WhatMakesUsDifferentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatMakesUsDifferentRoutingModule { }
