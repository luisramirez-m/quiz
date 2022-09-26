import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class QuizHomeComponent implements OnInit {
  totalQuestions: number = 0;
  isLoading: boolean = true;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getAllQuestions();
  }

  /**
   * Get all questions from API, to assign isLoading and totalQuestions.
   *
   * @memberof QuizHomeComponent
   */
  getAllQuestions(): void {
    this.quizService.getQuizQuestions().subscribe((questions: IQuestion[]) => {
      this.totalQuestions = questions.length;
      // Hack: test for load big quiz. Only for show loading and disabled button
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
}
