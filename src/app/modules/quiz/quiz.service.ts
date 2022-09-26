import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IQuestion } from './quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  /**
   * Get all quiz questions.
   *
   * @return {*}  {Observable<IQuestion[]>}
   * @memberof QuizServmockErrorResponseice
   */
  getQuizQuestions(): Observable<IQuestion[]> {
    return this.http
      .get<IQuestion[]>(
        'https://storage.googleapis.com/netwo-public/quizz.json'
      )
      .pipe(tap((questions: IQuestion[]) => questions));
  }
}
