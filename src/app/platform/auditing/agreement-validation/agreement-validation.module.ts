import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AgreementValidationComponent } from './agreement-validation.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [{ path: '', component: AgreementValidationComponent }];

@NgModule({
  declarations: [AgreementValidationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AgreementValidationModule {}
