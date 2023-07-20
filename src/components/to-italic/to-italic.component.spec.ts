import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToItalicComponent } from './to-italic.component';

describe('ToItalicComponent', () => {
  let component: ToItalicComponent;
  let fixture: ComponentFixture<ToItalicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToItalicComponent]
    });
    fixture = TestBed.createComponent(ToItalicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
