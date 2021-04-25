import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FutureProofComponent } from './future-proof.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: FutureProofComponent }];

@NgModule({
  declarations: [FutureProofComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class FutureProofModule { }
