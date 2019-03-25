import { Component, OnInit, OnChanges } from '@angular/core';
import { Didto } from '../../../dto/Didto.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css'],
  inputs: ['id'],
  providers:  [ Didto ],
  host: {
    '(click)': 'onClick()'
  }
})
export class MetadataComponent implements OnInit, OnChanges {

  private id: string;
  constructor(
    private diDto: Didto
  ) { }

  ngOnChanges() {
    console.log('metadata.inputs:' + this.id);
  }

  ngOnInit() {
  }

  onClick() {
    this.diDto.id += '1';
    console.log('metadata.host click:' + this.diDto.id);
  }

}
