import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qz-question-counter',
  templateUrl: './question-counter.component.html',
  styleUrls: ['./question-counter.component.scss'],
})
export class QzQuestionCounterComponent {
  @Input() totalQuestions: number = 0;
  @Input() currentQuestion: number = 0;
}
