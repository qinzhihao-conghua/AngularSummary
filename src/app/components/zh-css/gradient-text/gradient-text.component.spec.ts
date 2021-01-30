import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientTextComponent } from './gradient-text.component';

describe('GradientTextComponent', () => {
  let component: GradientTextComponent;
  let fixture: ComponentFixture<GradientTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
