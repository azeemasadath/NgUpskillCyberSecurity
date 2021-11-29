import { Component, OnInit } from '@angular/core';
import { Questions } from '../shared/questions';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-quiz-landing',
  templateUrl: './quiz-landing.component.html',
  styleUrls: ['./quiz-landing.component.css']
})
export class QuizLandingComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  questons : Questions[]; 

  ngOnInit(): void {

    console.log('Service call started');

    this.questionsService.getQuestionsWithTopicId().subscribe(
      response => {
        this.questons = response
      }
    )
    console.log('Service call completed');

  }

}
