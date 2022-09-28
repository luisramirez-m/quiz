import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QzQuestionCounterComponent } from './question-counter.component';

describe('QuestionCounterComponent', () => {
  let component: QzQuestionCounterComponent;
  let fixture: ComponentFixture<QzQuestionCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QzQuestionCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QzQuestionCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
