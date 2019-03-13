import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultioutletsComponent } from './multioutlets.component';

describe('MultioutletsComponent', () => {
  let component: MultioutletsComponent;
  let fixture: ComponentFixture<MultioutletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultioutletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultioutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
