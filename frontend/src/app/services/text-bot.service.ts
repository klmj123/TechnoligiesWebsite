import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TextBot } from '../models/text-bot';

@Injectable({
  providedIn: 'root'
})
export class TextBotService {

  private baseUrl: string = "http://localhost:8081/api/v1/ai/openAi";

  constructor(private httpClient: HttpClient) { }

  getAiMessage(message: string): Observable<String>{
    return this.httpClient.post<string>(`${this.baseUrl}`, message);
  }

  getAiPersonalities(): Observable<TextBot[]>{
    return this.httpClient.get<TextBot[]>(`${this.baseUrl}`);
  }

  setAiPersonality(id: number): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/setPersonality`, { id });
  }

  restartConversation(): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}`);
  }
}
