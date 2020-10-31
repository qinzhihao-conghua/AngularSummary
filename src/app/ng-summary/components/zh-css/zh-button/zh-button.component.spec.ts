import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhButtonComponent } from './zh-button.component';

describe('ZhButtonComponent', () => {
  let component: ZhButtonComponent;
  let fixture: ComponentFixture<ZhButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
