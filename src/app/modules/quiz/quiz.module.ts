import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizHomeComponent } from './home/home.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { ComponentsModule } from '@components/components.module';
import { QuizService } from './quiz.service';

@NgModule({
  declarations: [QuizHomeComponent],
  imports: [CommonModule, QuizRoutingModule, ComponentsModule],
})
export class QuizModule {}
