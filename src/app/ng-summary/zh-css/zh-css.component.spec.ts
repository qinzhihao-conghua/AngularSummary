import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhCssComponent } from './zh-css.component';

describe('ZhCssComponent', () => {
  let component: ZhCssComponent;
  let fixture: ComponentFixture<ZhCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
