import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // is public because we are going to binding service with the template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
