import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WavesBallComponent } from './waves-ball.component';

describe('WavesBallComponent', () => {
  let component: WavesBallComponent;
  let fixture: ComponentFixture<WavesBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WavesBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WavesBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
