import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'qz-question-timer',
  templateUrl: './question-timer.component.html',
  styleUrls: ['./question-timer.component.scss'],
})
export class QzQuestionTimerComponent implements OnInit {
  @Input()
  limitSeconds: number = 120;

  @Input()
  isMinutesFormat!: boolean;
  @Output() emitEndTimer: EventEmitter<boolean> = new EventEmitter<boolean>();

  timeLeft!: number;
  interval!: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit(): void {
    this.generateTimer();
  }

  /**
   * Generate timer witn setInterval. When timer is finished emit with EventEmitter, for the parent component
   *
   * @memberof QzQuestionTimer
   */
  generateTimer() {
    this.timeLeft = this.limitSeconds;

    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.emitEndTimer.emit(true);
      }
    }, 1000);
  }

  /**
   * Format seconds, if user use the prop 'isMinutesFormat" the timer formated to mm:ss, if is false the format on seconds
   *
   * @param {number} seconds
   * @return {*}
   * @memberof QzQuestionTimer
   */
  formatSeconds(seconds: number) {
    const minutesTotal = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0');

    const secondsTotal = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');

    this.isMinutesFormat;

    if (this.isMinutesFormat) {
      return `${minutesTotal}:${secondsTotal}`;
    }

    return `${seconds}s`;
  }

  /**
   * Restar timer
   *
   * @memberof QzQuestionTimer
   */
  restarTimer(): void {
    clearInterval(this.interval);
    this.generateTimer();
  }

  /**
   * Stop timer
   *
   * @memberof QzQuestionTimerComponent
   */
  stopTimer(): void {
    clearInterval(this.interval);
    this.timeLeft = 0;
  }
}
