import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NightClubComponent } from './pages/night-club/night-club.component';
import { SiteComponent } from './site.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'night-club',
      },
      {
        path: 'night-club',
        component: NightClubComponent,
        title: 'Night Club',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
