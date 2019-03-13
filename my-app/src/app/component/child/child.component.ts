import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public name: string;
  public id: string;
  constructor() { }

  ngOnInit() {
    this.name = 'child';
    this.id = 'id';
  }

}
