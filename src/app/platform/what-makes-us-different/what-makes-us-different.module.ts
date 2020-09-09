import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WhatMakesUsDifferentComponent } from './what-makes-us-different.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: WhatMakesUsDifferentComponent }];

@NgModule({
  declarations: [WhatMakesUsDifferentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class WhatMakesUsDifferentModule {}
