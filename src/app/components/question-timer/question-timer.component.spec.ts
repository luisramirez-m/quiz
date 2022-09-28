import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QzQuestionTimerComponent } from './question-timer.component';

describe('QuestionTimerComponent', () => {
  let component: QzQuestionTimerComponent;
  let fixture: ComponentFixture<QzQuestionTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QzQuestionTimerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QzQuestionTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('generateTimer()', () => {
    it('should be generate timer ', () => {
      component.generateTimer();
      expect(component.timeLeft).toBeDefined();
      setTimeout(() => {
        expect(component.timeLeft).toBeLessThan(120);
      }, 1500);
    });
  });

  describe('formatSeconds()', () => {
    it('should be format on minutes format ', () => {
      const secondsToFormat = 120;
      component.formatSeconds(120);
      component.isMinutesFormat = true;

      expect(component.formatSeconds(120)).toEqual('02:00');
    });
  });

  describe('restarTimer()', () => {
    it('should be restar timer ', () => {
      // Generate timer
      component.generateTimer();
      setTimeout(() => {
        expect(component.timeLeft).toBeLessThan(120);
      }, 1500);

      component.restarTimer();
      expect(component.timeLeft).toEqual(120);
    });
  });

  describe('stopTimer()', () => {
    it('should be stop timer ', () => {
      // Generate timer
      component.generateTimer();
      setTimeout(() => {
        expect(component.timeLeft).toBeLessThan(120);
      }, 1500);

      component.stopTimer();
      expect(component.timeLeft).toEqual(0);
    });
  });
});
