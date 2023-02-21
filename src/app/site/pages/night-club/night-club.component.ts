import { Component } from '@angular/core';

@Component({
  selector: 'app-night-club',
  templateUrl: './night-club.component.html',
  styleUrls: ['./night-club.component.scss'],
})
export class NightClubComponent {
  activeTab = 0;
  /**
   *
   * @param tabIndex tab index (start at 0)
   */
  changeTab(tabIndex: number) {
    this.activeTab = tabIndex;
  }
}
