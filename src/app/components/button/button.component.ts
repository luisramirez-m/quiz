import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button[qz-button], a[qz-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class QzButtonComponent {
  @Input() btnType: 'primary' | 'secondary' = 'primary';

  @HostBinding('class')
  get classes(): string {
    return `px-5 py-2 rounded ${this.generateBackgroundColor(this.btnType)}`;
  }

  generateBackgroundColor(btnType: string): string {
    const bgColors: { [key: string]: string } = {
      primary: 'bg-qz-blue-500 text-white hover:bg-qz-blue-400',
      secondary: 'bg-slate-300 text-slate-800 hover:bg-slate-200',
    };
    return bgColors[btnType];
  }
}
