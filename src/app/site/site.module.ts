import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { RouterModule } from '@angular/router';
import { NightClubComponent } from './pages/night-club/night-club.component';

@NgModule({
  declarations: [SiteComponent, NightClubComponent],
  imports: [CommonModule, SiteRoutingModule, RouterModule],
})
export class SiteModule {}
