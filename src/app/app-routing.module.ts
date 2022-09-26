import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizHomeComponent } from './modules/quiz/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  {
    path: 'quiz',
    loadChildren: () =>
      import('./modules/quiz/quiz.module').then((m) => m.QuizModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
