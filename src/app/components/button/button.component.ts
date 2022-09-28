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
    return `px-5 py-2 rounded cursor-pointer disabled:opacity-40 disabled:bg-gray-400 disabled:text-gray-900 disabled:cursor-not-allowed select-none ${this.generateBackgroundColor(
      this.btnType
    )}`;
  }

  /**
   * Generate button background color (only accept: 'primary' or 'secondary')
   *
   * If you need to generate another type, you can add it on "bgColors" const.
   *
   * @param {string} btnType
   * @return {*}  {string}
   * @memberof QzButtonComponent
   */
  generateBackgroundColor(btnType: string): string {
    const bgColors: { [key: string]: string } = {
      primary: 'bg-qz-acent-500 text-white hover:bg-qz-acent-600',
      secondary: 'bg-slate-300 text-slate-800 hover:bg-slate-200',
    };
    return bgColors[btnType];
  }
}
