import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhRadioNewComponent } from './zh-radio-new.component';

describe('ZhRadioNewComponent', () => {
  let component: ZhRadioNewComponent;
  let fixture: ComponentFixture<ZhRadioNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhRadioNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhRadioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
