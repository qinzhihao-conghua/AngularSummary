import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForViewComponent } from './for-view.component';

describe('ForViewComponent', () => {
  let component: ForViewComponent;
  let fixture: ComponentFixture<ForViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
