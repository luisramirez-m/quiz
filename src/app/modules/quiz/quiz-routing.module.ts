import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizHomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: QuizHomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
