import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'platform',
    loadChildren: () => import('./platform/platform.module').then((m) => m.PlatformModule),
  },
  {
    path: 'developers',
    loadChildren: () => import('./developers/developers.module').then((m) => m.DevelopersModule),
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
