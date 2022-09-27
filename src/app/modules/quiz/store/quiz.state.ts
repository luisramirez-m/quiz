import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { IQuestion } from '../quiz';
import { QuizService } from '../quiz.service';
import { GetQuizQuestions } from './quiz.actions';

export class QuizStateModel {
  public questionToAnswer!: IQuestion;
  public quizQuestions!: IQuestion[];
}

@State<QuizStateModel>({
  name: 'quiz',
  defaults: {
    questionToAnswer: {} as IQuestion,
    quizQuestions: [],
  },
})
@Injectable()
export class QuizState {
  @Selector()
  static quizQuestions(state: QuizStateModel) {
    return state.quizQuestions;
  }

  constructor(private quizServie: QuizService) {}

  /**
   * Get questions from servive and set on the state "quizQuestions"
   *
   * @param {StateContext<QuizStateModel>} { patchState }
   * @return {*}
   * @memberof QuizState
   */
  @Action(GetQuizQuestions)
  getQuizQuestions({ patchState }: StateContext<QuizStateModel>) {
    return this.quizServie.getQuizQuestions().pipe(
      tap((quizQuestions: IQuestion[]) => {
        patchState({
          quizQuestions: quizQuestions,
        });
      })
    );
  }
}
