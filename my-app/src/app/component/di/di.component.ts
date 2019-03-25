import { Component, OnInit } from '@angular/core';
import { Didto } from '../../dto/Didto.service';
@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [Didto]
})
export class DiComponent implements OnInit {

  constructor(
    private diDto: Didto
  ) { }

  ngOnInit() {
  }

  click() {
    this.diDto.id += '1';
    console.log(this.diDto.id);
  }

}
