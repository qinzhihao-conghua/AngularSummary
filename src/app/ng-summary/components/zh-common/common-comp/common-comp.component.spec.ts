import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCompComponent } from './common-comp.component';

describe('CommonCompComponent', () => {
  let component: CommonCompComponent;
  let fixture: ComponentFixture<CommonCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
