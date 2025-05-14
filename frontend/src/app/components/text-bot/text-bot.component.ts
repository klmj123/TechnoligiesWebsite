import { Component } from '@angular/core';
import { TextBotService } from '../../services/text-bot.service';
import { FormsModule } from '@angular/forms';
import { TextBot } from '../../models/text-bot';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-text-bot',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text-bot.component.html',
  styleUrl: './text-bot.component.css'
})
export class TextBotComponent {

  message: string;
  conversation: string;
  selectedPersonality: number;
  typing: boolean;
  personalities: TextBot[];


  constructor(private myBotService: TextBotService){}

  ngOnInit(){
    this.message = "Ask me anything!";
    this.typing = false;
    this.conversation = "";
    this.getPersonalities();
  }

  getMessage(){
    this.myBotService.getAiMessage(this.message).subscribe({
      next: resp => {
        if (this.conversation != ""){
          this.conversation = this.conversation + "\n\n" + this.message + "\n\n" + resp;
        }else if (this.conversation == ""){
          this.conversation = this.message + "\n\n" + resp;
        }
        //this.setTypingToFalse();
      },
      error: (e) => console.log(e)
    });
  }

  getPersonalities(){
    this.myBotService.getAiPersonalities().subscribe({
      next: (resp) => {
        this.personalities = resp;
        this.selectedPersonality = this.personalities[0].id;
      },
      error: (e) => console.log(e)
    });
  }

  setPersonality(){
    this.myBotService.setAiPersonality(this.selectedPersonality).subscribe({
      next: (resp) => console.log(resp),
      error: (e) => console.log(e)
    });
  }

  startNewConversation(){
    this.myBotService.restartConversation().subscribe({
      next: (resp) => {
        console.log(resp);
        if(this.selectedPersonality != 1){
          this.setPersonality();
        }
        this.conversation = "";
      },
      error: (e) => console.log(e)
    });
  }

  setTypingToTrue(){
    if(!this.typing){
      this.message = "";
      this.typing = true;
    }
  }

  setTypingToFalse(){
    //this.message = "continue with the conversation!";
    //this.typing = false;
  }
}

