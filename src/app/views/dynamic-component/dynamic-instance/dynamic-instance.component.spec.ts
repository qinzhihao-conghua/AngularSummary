import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInstanceComponent } from './dynamic-instance.component';

describe('DynamicInstanceComponent', () => {
  let component: DynamicInstanceComponent;
  let fixture: ComponentFixture<DynamicInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
