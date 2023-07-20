import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDownComponent } from './slide-down.component';

describe('SlideDownComponent', () => {
  let component: SlideDownComponent;
  let fixture: ComponentFixture<SlideDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideDownComponent]
    });
    fixture = TestBed.createComponent(SlideDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
