import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { QzQuestionTimerComponent } from '@components/question-timer/question-timer.component';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { IQuestion } from '../quiz';
import { GetQuizQuestions } from '../store/quiz.actions';
import { QuizState } from '../store/quiz.state';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuizQuestionComponent implements OnInit, OnDestroy {
  // Form
  responsesForm!: FormGroup;
  checkInputMultipleArray: string[] = [];

  currentQuestion: number = 0;
  maxQuestions: number = 0;

  showResult: boolean = false;
  goodQuestions: number = 0;

  subscriptions: Subscription[] = [];

  @ViewChild(QzQuestionTimerComponent)
  qzQuestionTimerComponent!: QzQuestionTimerComponent;

  // Select quizQuestions from store
  @Select(QuizState.quizQuestions) quizQuestions$!: Observable<IQuestion[]>;

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  get responsesArray(): FormArray {
    return this.responsesForm.get('responses') as FormArray;
  }

  ngOnInit(): void {
    this.initQuestionsForm();

    // Get all quiz questions from store
    const subscriptionQuizQuestions = this.store
      .dispatch(new GetQuizQuestions())
      .subscribe((store) => {
        // Get quizQuestions for generate item form question
        store.quiz.quizQuestions.map((question: IQuestion, index: number) => {
          this.addQestionForm(question, index);
        });
        this.maxQuestions = store.quiz.quizQuestions.length;
      });

    this.subscriptions.push(subscriptionQuizQuestions);
  }

  /**
   * Create Question form, save the respones for user
   *
   * @memberof QuizQuestionComponent
   */
  initQuestionsForm(): void {
    this.responsesForm = this.formBuilder.group({
      responses: new FormArray([]),
    });
  }

  /**
   * Add item form on questions
   *
   * @param {IQuestion} question
   * @param {number} index
   * @memberof QuizQuestionComponent
   */
  addQestionForm(question: IQuestion, index: number): void {
    this.responsesArray.push(
      this.formBuilder.group({
        index: [index],
        response: ['', Validators.required],
        label: [question.label],
        answerType: [question.answerType],
        answer: [question.answer],
        choices: [question.choices && question.choices],
        answers: [question.answers && question.answers],
      })
    );
  }

  /**
   * Button for change to next question and save question, show result if questions are ended
   *
   * @memberof QuizQuestionComponent
   */
  onSaveQuestion(): void {
    // Check if next question is last
    if (this.currentQuestion + 1 < this.maxQuestions) {
      this.currentQuestion++;

      // Restar timer and generate timer again -> from child component
      this.qzQuestionTimerComponent.restarTimer();
    } else {
      // Check if is finished quiz and show result and stop timer
      this.showResult = true;
      this.qzQuestionTimerComponent.stopTimer();
    }
  }

  /**
   * Function for create array on Input checkbox and update control[index]
   *
   * @param {Event} event
   * @param {number} index
   * @memberof QuizQuestionComponent
   */
  onCheckboxChange(event: Event, index: number): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (target.checked) {
      this.checkInputMultipleArray.push(target.value);
    } else {
      this.checkInputMultipleArray = this.checkInputMultipleArray.filter(
        (value) => value != target.value
      );
    }

    (
      this.responsesArray.controls[index].get('response') as FormControl
    ).setValue(this.checkInputMultipleArray);
  }

  /**
   * Check if response is good for show icon
   *
   * @param {(string | string[])} goodAnswer
   * @param {(string | string[])} userResponse
   * @param {string} answerType
   * @return {*}  {boolean}
   * @memberof QuizQuestionComponent
   */
  checkIsGoodResponse(
    goodAnswer: string | string[],
    userResponse: string | string[],
    answerType: string
  ): boolean {
    if (answerType === 'multiple-choice') {
      const sortGoodAnswer = [...goodAnswer].sort();
      const sortUserResponse = [...userResponse].sort();
      return (
        JSON.stringify(sortGoodAnswer) === JSON.stringify(sortUserResponse)
      );
    } else {
      return goodAnswer === userResponse;
    }
  }

  /**
   * Check and count all good responses
   *
   * @return {*}  {number}
   * @memberof QuizQuestionComponent
   */
  countGoodResponse(): number {
    const responses = this.responsesForm.value.responses;

    return responses.filter((response: any) => {
      if (response.answerType === 'multiple-choice') {
        return this.checkIsGoodResponse(
          response.answers,
          response.response,
          response.answerType
        );
      } else {
        return this.checkIsGoodResponse(
          response.answer,
          response.response,
          response.answerType
        );
      }
    }).length;
  }

  ngOnDestroy(): void {
    // Destroy subscriptions
    if (this.subscriptions) {
      this.subscriptions.map((subscription) => subscription.unsubscribe());
    }
  }
}
