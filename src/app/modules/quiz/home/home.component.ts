import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IQuestion } from '../quiz';
import { GetQuizQuestions } from '../store/quiz.actions';
import { QuizState } from '../store/quiz.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class QuizHomeComponent implements OnInit {
  totalQuestions: number = 0;
  isLoading: boolean = true;

  // Select quizQuestions from store
  @Select(QuizState.quizQuestions) quizQuestions$!: Observable<IQuestion[]>;

  constructor(
    private store: Store,
    private actions$: Actions,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get all quiz questions from store
    this.store.dispatch(new GetQuizQuestions());

    // When action is Successful change state of isLoading
    this.actions$.pipe(ofActionSuccessful(GetQuizQuestions)).subscribe(() => {
      // Hack: test for load big quiz. Only for show loading and disabled button
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  /**
   * Go to questions router handler for button
   *
   * @memberof QuizHomeComponent
   */
  goToQuestions(): void {
    this.router.navigate(['/quiz', 'questions']);
  }
}
