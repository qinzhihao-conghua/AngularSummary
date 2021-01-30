import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthChildChildrenComponent } from './width-child-children.component';

describe('WidthChildChildrenComponent', () => {
  let component: WidthChildChildrenComponent;
  let fixture: ComponentFixture<WidthChildChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidthChildChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthChildChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
