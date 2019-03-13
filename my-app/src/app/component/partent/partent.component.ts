import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-partent',
  templateUrl: './partent.component.html',
  styleUrls: ['./partent.component.css']
})
export class PartentComponent implements OnInit {
  @ViewChild('child') child: ChildComponent;

  name: string;
  id: string;
  constructor() { }

  ngOnInit() {
  }

  click() {
    this.child.ngOnInit();
  }

  input(value: string) {
    if(value === 'name') {
      this.child.name = this.name;
    } else if (value ==='id') {
      this.child.id = this.id;
    }
  }
}
