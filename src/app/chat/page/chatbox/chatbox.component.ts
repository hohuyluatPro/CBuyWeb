import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  isHidden = true;
  messages: { text: string, sender: 'user' | 'bot' }[] = [];
  newMessage: string = '';

  toggleChatbox() {
    this.isHidden = !this.isHidden;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: 'user' });
  
      // Giả lập phản hồi từ bot
      setTimeout(() => {
        this.messages.push({ text: 'Xin chào! Tôi có thể giúp gì?', sender: 'bot' });
      }, 1000);
  
      this.newMessage = '';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
