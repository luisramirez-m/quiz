import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@components/components.module';
import { NgxsModule } from '@ngxs/store';
import { quizQuestionsMock } from '../quiz.mock';
import { QuizState } from '../store/quiz.state';

import { QuizQuestionComponent } from './question.component';

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizQuestionComponent],
      imports: [
        ComponentsModule,
        HttpClientTestingModule,
        NgxsModule.forRoot([QuizState], { developmentMode: true }),
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initQuestionsForm()', () => {
    const form: [] = [];
    it('should be init question form ', () => {
      component.initQuestionsForm();
      expect(component.responsesArray.value).toEqual(form);
    });
  });

  describe('addQestionForm()', () => {
    it('should be add question response form', () => {
      component.initQuestionsForm();
      component.addQestionForm(quizQuestionsMock[0], 0);
      expect(component.responsesArray.value.length).toBeGreaterThan(0);
    });
  });

  describe('onSaveQuestion()', () => {
    it('should be change to next question', () => {
      component.maxQuestions = 5;
      component.onSaveQuestion();
      expect(component.currentQuestion).toBeGreaterThan(0);
    });

    it('should be show result', () => {
      component.currentQuestion = 5;
      component.maxQuestions = 5;
      component.onSaveQuestion();
      expect(component.showResult).toBeTruthy();
    });
  });
});
