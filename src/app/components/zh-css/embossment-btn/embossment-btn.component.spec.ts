import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbossmentBtnComponent } from './embossment-btn.component';

describe('EmbossmentBtnComponent', () => {
  let component: EmbossmentBtnComponent;
  let fixture: ComponentFixture<EmbossmentBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbossmentBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbossmentBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
