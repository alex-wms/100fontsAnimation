import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlineFromLeftComponent } from './underline-from-left.component';

describe('UnderlineFromLeftComponent', () => {
  let component: UnderlineFromLeftComponent;
  let fixture: ComponentFixture<UnderlineFromLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderlineFromLeftComponent]
    });
    fixture = TestBed.createComponent(UnderlineFromLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
