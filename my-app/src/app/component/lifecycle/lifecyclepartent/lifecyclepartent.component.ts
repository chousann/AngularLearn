import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclepartent',
  templateUrl: './lifecyclepartent.component.html',
  styleUrls: ['./lifecyclepartent.component.css']
})
export class LifecyclepartentComponent implements OnInit {
  regStr: string = '/Chapter [0-9]{1,2}/';
  constructor() { 
    this.regStr = '/Chapter [0-8]{1,2}/';
  }

  ngOnInit() {
    this.regStr = '/Chapter [0-7]{1,2}/';
  }

  click() {
    this.regStr = '/Chapter [0-6]{1,2}/';
  }

}
