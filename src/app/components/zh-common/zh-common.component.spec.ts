import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhCommonComponent } from './zh-common.component';

describe('ZhCommonComponent', () => {
  let component: ZhCommonComponent;
  let fixture: ComponentFixture<ZhCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
