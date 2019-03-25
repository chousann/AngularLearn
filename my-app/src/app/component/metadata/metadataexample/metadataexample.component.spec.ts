import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataexampleComponent } from './metadataexample.component';

describe('MetadataexampleComponent', () => {
  let component: MetadataexampleComponent;
  let fixture: ComponentFixture<MetadataexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
