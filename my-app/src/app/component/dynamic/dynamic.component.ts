import { Compiler, NgModule, Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  @ViewChild('room', { read: ViewContainerRef }) room: ViewContainerRef;
  constructor(
    private compiler: Compiler
  ) { }

  ngOnInit() {
  }

  click() {
    this.room.createComponent(this.create('<p>Dy works</p>'));
  }

  create(templateString: string): ComponentFactory<any> {

    @Component({
      selector: 'dynamic-component',
      template: templateString
    })
    class Dy implements OnInit {
      constructor() {

      }
      ngOnInit() {
      }
    }

    @NgModule({
      declarations: [
        Dy
      ]
    })
    class DyModule { }

    return this.compiler.compileModuleAndAllComponentsSync(DyModule)
      .componentFactories.find(x => x.componentType ===Dy)
  }

}
