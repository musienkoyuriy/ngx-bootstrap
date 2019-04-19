import { TabsetComponent } from 'ngx-bootstrap';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'demo-tabs-basic',
  templateUrl: './basic.html'
})
export class DemoTabsBasicComponent {
  @ViewChild('customTpl') customTpl;
  @ViewChild(TabsetComponent) tabsetComponent;

  openTab() {
    this.tabsetComponent.openTab('dfsd', this.customTpl, '');
  }
}
