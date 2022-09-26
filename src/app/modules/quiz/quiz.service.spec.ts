import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { quizQuestionsMock } from './quiz.mock';

import { QuizService } from './quiz.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('QuizService', () => {
  let quizService: QuizService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    quizService = TestBed.inject(QuizService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(quizService).toBeTruthy();
  });

  describe('getSimulatorRuleParameters()', () => {
    const url = 'https://storage.googleapis.com/netwo-public/quizz.json';
    it('should return data -> Success', () => {
      quizService.getQuizQuestions().subscribe((data) => {
        expect(data).toEqual(quizQuestionsMock);
      });

      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('GET');
      req.flush(quizQuestionsMock);
    });

    it('should return empty token object  -> Empty', () => {
      quizService.getQuizQuestions().subscribe((data) => {
        expect(data).toEqual({});
      });

      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('GET');
      req.flush({});
    });

    it('should not return token and return error -> Error', () => {
      const erorMesagge = 'Invalid request parameters';
      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };

      quizService.getQuizQuestions().subscribe(
        (data) => data,
        (error: HttpErrorResponse) => {
          expect(error.error).toEqual(erorMesagge);
          expect(error.status).toEqual(400);
        }
      );

      const req = httpTestingController.expectOne(url);
      req.flush(erorMesagge, mockErrorResponse);
    });
  });
});
