import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'careers',
        loadChildren: () => import('./careers/careers.module').then((m) => m.CareersModule),
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
      },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
