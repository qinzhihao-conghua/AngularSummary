import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilibiliWinterComponent } from './bilibili-winter.component';

describe('BilibiliWinterComponent', () => {
  let component: BilibiliWinterComponent;
  let fixture: ComponentFixture<BilibiliWinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilibiliWinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilibiliWinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
