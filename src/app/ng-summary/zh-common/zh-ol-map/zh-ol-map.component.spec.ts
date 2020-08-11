import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhOlMapComponent } from './zh-ol-map.component';

describe('ZhOlMapComponent', () => {
  let component: ZhOlMapComponent;
  let fixture: ComponentFixture<ZhOlMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhOlMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhOlMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
