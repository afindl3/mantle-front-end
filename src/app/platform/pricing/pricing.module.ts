import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PricingComponent } from './pricing.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: PricingComponent }];

@NgModule({
  declarations: [PricingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PricingModule {}
