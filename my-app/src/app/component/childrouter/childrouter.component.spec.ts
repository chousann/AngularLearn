import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrouterComponent } from './childrouter.component';

describe('ChildrouterComponent', () => {
  let component: ChildrouterComponent;
  let fixture: ComponentFixture<ChildrouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
