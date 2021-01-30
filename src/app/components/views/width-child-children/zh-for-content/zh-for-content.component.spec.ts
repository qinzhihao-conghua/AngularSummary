import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhForContentComponent } from './zh-for-content.component';

describe('ZhForContentComponent', () => {
  let component: ZhForContentComponent;
  let fixture: ComponentFixture<ZhForContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhForContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhForContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
