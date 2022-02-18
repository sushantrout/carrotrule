import { Component, OnInit } from '@angular/core';
import { MessageModel, MessageModelResponse } from 'src/app/model/message-box-model';
import { MessageBoxService } from 'src/app/services/message-box.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor(private messageService : MessageBoxService) { }

  messages : MessageModel[] = [];
  ngOnInit(): void {
    this.messages = [];
    this.getMessages();
  }

  getMessages(){
    this.messageService.getAll("messages").subscribe((res : MessageModelResponse) => {
      this.messages = res.messages;
    });
  }
}
