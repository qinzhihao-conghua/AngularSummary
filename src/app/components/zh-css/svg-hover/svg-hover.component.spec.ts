import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHoverComponent } from './svg-hover.component';

describe('SvgHoverComponent', () => {
  let component: SvgHoverComponent;
  let fixture: ComponentFixture<SvgHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
