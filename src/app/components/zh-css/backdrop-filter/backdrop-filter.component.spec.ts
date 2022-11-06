import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropFilterComponent } from './backdrop-filter.component';

describe('BackdropFilterComponent', () => {
  let component: BackdropFilterComponent;
  let fixture: ComponentFixture<BackdropFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
