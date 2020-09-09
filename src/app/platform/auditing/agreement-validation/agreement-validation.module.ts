import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AgreementValidationComponent } from './agreement-validation.component';

const routes: Routes = [{ path: '', component: AgreementValidationComponent }];

@NgModule({
  declarations: [AgreementValidationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AgreementValidationModule {}
