import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QzBestScoreComponent } from './best-score/best-score.component';
import { QzButtonComponent } from './button/button.component';

const components = [QzButtonComponent, QzBestScoreComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class ComponentsModule {}
