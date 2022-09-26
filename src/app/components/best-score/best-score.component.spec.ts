import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QzBestScoreComponent } from './best-score.component';

describe('BestScoreComponent', () => {
  let component: QzBestScoreComponent;
  let fixture: ComponentFixture<QzBestScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QzBestScoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QzBestScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('classes()', () => {
    it('should be validate best score less than total questions', () => {
      component.totalQuestions = 10;
      component.bestScore = 15;

      expect(component.generateBestScore()).toEqual(
        `${component.totalQuestions}/${component.totalQuestions}`
      );
    });
  });
});
