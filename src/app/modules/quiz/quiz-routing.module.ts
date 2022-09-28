import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizHomeComponent } from './home/home.component';
import { QuizQuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: '',
    component: QuizHomeComponent,
  },
  {
    path: 'questions',
    component: QuizQuestionComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
