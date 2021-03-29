import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilibiliSpringComponent } from './bilibili-spring.component';

describe('BilibiliSpringComponent', () => {
  let component: BilibiliSpringComponent;
  let fixture: ComponentFixture<BilibiliSpringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilibiliSpringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilibiliSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
