import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizHomeComponent } from './home/home.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { ComponentsModule } from '@components/components.module';
import { QuizQuestionComponent } from './question/question.component';
import { QuizService } from './quiz.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuizHomeComponent, QuizQuestionComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QuizService],
})
export class QuizModule {}
