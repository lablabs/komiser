import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LimitsComponent } from './limits.component';

describe('LimitsComponent', () => {
  let component: LimitsComponent;
  let fixture: ComponentFixture<LimitsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
