import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineThroughComponent } from './line-through.component';

describe('LineThroughComponent', () => {
  let component: LineThroughComponent;
  let fixture: ComponentFixture<LineThroughComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineThroughComponent]
    });
    fixture = TestBed.createComponent(LineThroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
