import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueaccessorComponent } from './valueaccessor.component';

describe('ValueaccessorComponent', () => {
  let component: ValueaccessorComponent;
  let fixture: ComponentFixture<ValueaccessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueaccessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueaccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
