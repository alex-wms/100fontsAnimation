import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlineFromRightComponent } from './underline-from-right.component';

describe('UnderlineFromRightComponent', () => {
  let component: UnderlineFromRightComponent;
  let fixture: ComponentFixture<UnderlineFromRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderlineFromRightComponent]
    });
    fixture = TestBed.createComponent(UnderlineFromRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
