import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QzBestScoreComponent } from './best-score/best-score.component';
import { QzButtonComponent } from './button/button.component';
import { QzSpinnerComponent } from './spinner/spinner.component';
import { QzQuestionTimerComponent } from './question-timer/question-timer.component';
import { QzQuestionCounterComponent } from './question-counter/question-counter.component';

const components = [
  QzButtonComponent,
  QzBestScoreComponent,
  QzSpinnerComponent,
  QzQuestionTimerComponent,
  QzQuestionCounterComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class ComponentsModule {}
