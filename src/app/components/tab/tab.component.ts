import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  activeTab = 0;
  /**
   *
   * @param tabIndex tab index (start at 0)
   */
  changeTab(tabIndex: number) {
    this.activeTab = tabIndex;
  }
}
