import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhCheckboxNewComponent } from './zh-checkbox-new.component';

describe('ZhCheckboxNewComponent', () => {
  let component: ZhCheckboxNewComponent;
  let fixture: ComponentFixture<ZhCheckboxNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhCheckboxNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhCheckboxNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
