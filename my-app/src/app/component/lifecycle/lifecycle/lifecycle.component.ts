import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges {
  @Input() regStr: string;

  regexp: RegExp;
  constructor() {
    console.log('1:' + this.regStr + this.regexp);
    this.regexp = new RegExp(this.regStr);
    console.log('2:' + this.regStr + this.regexp);
  }

  ngOnChanges() {
    console.log('5:' + this.regStr + this.regexp);
    this.regexp = new RegExp(this.regStr);
    console.log('6:' + this.regStr + this.regexp);
  }

  ngOnInit() {
    console.log('3:' + this.regStr + this.regexp);
    this.regexp = new RegExp(this.regStr);
    console.log('4:' + this.regStr + this.regexp);
  }

}
