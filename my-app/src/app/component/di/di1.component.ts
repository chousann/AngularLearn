import { Component, OnInit } from '@angular/core';
import { Didto } from '../../dto/Didto.service';
@Component({
  selector: 'app-di1',
  templateUrl: './di1.component.html',
  styleUrls: ['./di.component.css'],
})
export class Di1Component implements OnInit {

  constructor(
    private diDto: Didto
  ) { }

  ngOnInit() {
  }

  click() {
    this.diDto.id += '2';
    console.log(this.diDto.id);
  }

}
