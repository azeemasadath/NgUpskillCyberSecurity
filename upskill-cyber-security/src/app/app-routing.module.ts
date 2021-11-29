import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizLandingComponent } from './quiz-landing/quiz-landing.component';


const routes: Routes = [
  {path: 'start-quiz', component: QuizLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
