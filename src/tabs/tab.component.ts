import {  Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
  <div [hidden]="!active">
    <ng-content></ng-content>
    <ng-container *ngIf="template" [ngTemplateOutlet]="template">
    </ng-container>
  </div>`
})
export class TabComponent {
  @Input() heading: string;
  @Input() active = false;
  @Input() template: any;
  @Input() tabData: any;
  @Input() closeable = false;
}
