import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  links: any[];
  contacts: any[];
  constructor() {
    this.links = [
      {
        name: 'inbox',
        icon: 'fa-inbox',
        notification: '24'
      },
      {
        name: 'draft',
        icon: 'fa-envelope',
        notification: '2'
      },
      {
        name: 'sent',
        icon: 'fa-external-link',
        notification: '3'
      },
      {
        name: 'spam',
        icon: 'fa-exclamation-circle',
        notification: '45'
      },
      {
        name: 'deleted',
        icon: 'fa-trash',
        notification: '6'
      },
    ];
    this.contacts = [
      {
        name: 'John',
        details: 'office employee',
        icon: 'fa-user'
      },
      {
        name: 'Peter',
        details: 'friends',
        icon: 'fa-user'
      },
    ];
  }

  ngOnInit() {
  }

}
