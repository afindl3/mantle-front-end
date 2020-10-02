import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WhatIsMantleComponent } from './what-is-mantle.component';

const routes: Routes = [{ path: '', component: WhatIsMantleComponent }];
@NgModule({
  declarations: [WhatIsMantleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WhatIsMantleModule {}
