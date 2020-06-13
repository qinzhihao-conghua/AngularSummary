import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMessageComponent } from './component-message.component';

describe('ComponentMessageComponent', () => {
  let component: ComponentMessageComponent;
  let fixture: ComponentFixture<ComponentMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
