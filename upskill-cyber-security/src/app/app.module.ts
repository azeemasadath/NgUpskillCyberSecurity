import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizLandingComponent } from './quiz-landing/quiz-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
