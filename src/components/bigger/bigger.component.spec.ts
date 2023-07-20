import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerComponent } from './bigger.component';

describe('BiggerComponent', () => {
  let component: BiggerComponent;
  let fixture: ComponentFixture<BiggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiggerComponent]
    });
    fixture = TestBed.createComponent(BiggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
