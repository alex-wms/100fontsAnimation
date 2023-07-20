import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOutComponent } from './slide-out.component';

describe('SlideOutComponent', () => {
  let component: SlideOutComponent;
  let fixture: ComponentFixture<SlideOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideOutComponent]
    });
    fixture = TestBed.createComponent(SlideOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
