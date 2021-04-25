import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedCybersecurityComponent } from './advanced-cybersecurity.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: AdvancedCybersecurityComponent }];

@NgModule({
  declarations: [AdvancedCybersecurityComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AdvancedCybersecurityModule { }
