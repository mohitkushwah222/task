import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  recents: any[];
  constructor() {
    this.recents = [
      {
        name: 'Taylor',
        icon: 'fa-facebook',
        label: 'Introducing Our new tool',
        details: 'Marlone is getting bigger and bigger',
        color : 'blue'
      },
      {
        name: 'Stephen',
        icon: 'fa-linkedin-square',
        label: 'Introducing Our new tool',
        details: 'Marlone is getting bigger and bigger',
        color : 'dark-blue'
      },
      {
        name: 'Peter',
        icon: 'fa-glide',
        label: 'Introducing Our new tool',
        details: 'Marlone is getting bigger and bigger',
        color : 'gray'
      },
      {
        name: 'Andrew',
        icon: 'fa-medium',
        label: 'Introducing Our new tool',
        details: 'Marlone is getting bigger and bigger',
        color : 'sky-blue'
      },
      {
        name: 'Anderson',
        icon: 'fa-opera',
        label: 'Introducing Our new tool',
        details: 'Marlone is getting bigger and bigger',
        color : 'red'
      },
      {
        name: 'Joy',
        icon: 'fa-reddit',
        label: 'Introducing Our new tool',
        details: 'Marlone is getting bigger and bigger',
        color : 'green'
      },
    ];
  }

  ngOnInit() {
  }

}
