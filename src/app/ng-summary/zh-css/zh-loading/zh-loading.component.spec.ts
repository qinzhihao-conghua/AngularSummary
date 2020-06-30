import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhLoadingComponent } from './zh-loading.component';

describe('ZhLoadingComponent', () => {
  let component: ZhLoadingComponent;
  let fixture: ComponentFixture<ZhLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
