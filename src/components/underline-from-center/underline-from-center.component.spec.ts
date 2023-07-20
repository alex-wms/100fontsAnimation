import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlineFromCenterComponent } from './underline-from-center.component';

describe('UnderlineFromCenterComponent', () => {
  let component: UnderlineFromCenterComponent;
  let fixture: ComponentFixture<UnderlineFromCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderlineFromCenterComponent]
    });
    fixture = TestBed.createComponent(UnderlineFromCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
