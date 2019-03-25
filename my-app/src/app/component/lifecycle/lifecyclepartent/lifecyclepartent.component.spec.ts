import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclepartentComponent } from './lifecyclepartent.component';

describe('LifecyclepartentComponent', () => {
  let component: LifecyclepartentComponent;
  let fixture: ComponentFixture<LifecyclepartentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecyclepartentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclepartentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
