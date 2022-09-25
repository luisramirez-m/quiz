import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qz-best-score',
  templateUrl: './best-score.component.html',
  styleUrls: ['./best-score.component.scss'],
})
export class QzBestScoreComponent {
  @Input() label: string = 'Meilleur score';
  @Input() totalQuestions: number = 10;
  @Input() bestScore: number = 9;

  generateBestScore(): string {
    return this.bestScore > this.totalQuestions
      ? `${this.totalQuestions}/${this.totalQuestions}`
      : `${this.bestScore}/${this.totalQuestions}`;
  }
}
