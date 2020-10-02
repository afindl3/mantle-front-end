import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { KycComponent } from './kyc.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [{ path: '', component: KycComponent }];

@NgModule({
  declarations: [KycComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class KycModule {}
