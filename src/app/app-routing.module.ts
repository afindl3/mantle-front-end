import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'platform',
    loadChildren: () => import('./platform/platform.module').then((m) => m.PlatformModule),
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'legal',
    loadChildren: () => import('./legal/legal.module').then((m) => m.LegalModule),
  },
  {
    path: 'developers',
    loadChildren: () => import('./developers/developers.module').then((m) => m.DevelopersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
