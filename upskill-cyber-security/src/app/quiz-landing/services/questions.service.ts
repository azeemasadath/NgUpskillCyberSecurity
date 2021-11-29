import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Questions } from 'src/app/shared/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private readonly ProjectUrl = 'https://upskillcybersecurityapi.azurewebsites.net/api/Questions/GetQuestions?topicId=1';

  constructor(private http: HttpClient) { }

  getQuestionsWithTopicId() {
    return this.http.get<Questions[]>(
      this.ProjectUrl            
    );
  }
}
