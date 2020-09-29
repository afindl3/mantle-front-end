import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GamingComponent } from './gaming.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [{ path: '', component: GamingComponent }];

@NgModule({
  declarations: [GamingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class GamingModule {}
