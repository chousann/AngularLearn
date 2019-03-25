import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadataexample',
  templateUrl: './metadataexample.component.html',
  styleUrls: ['./metadataexample.component.css']
})
export class MetadataexampleComponent implements OnInit {

  public id: string = 'metadataexample';
  constructor() { }

  ngOnInit() {
  }

  click() {
    this.id += 'id';
  }

}
