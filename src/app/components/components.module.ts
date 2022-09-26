import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QzBestScoreComponent } from './best-score/best-score.component';
import { QzButtonComponent } from './button/button.component';
import { QzSpinnerComponent } from './spinner/spinner.component';

const components = [
  QzButtonComponent,
  QzBestScoreComponent,
  QzSpinnerComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class ComponentsModule {}
