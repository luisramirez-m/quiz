import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuizService } from '@modules/quiz/quiz.service';
import { QuizState } from '@modules/quiz/store/quiz.state';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([QuizState], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [QuizService],
  bootstrap: [AppComponent],
})
export class AppModule {}
