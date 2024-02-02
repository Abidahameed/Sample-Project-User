import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcollectionComponent } from './topcollection.component';

describe('TopcollectionComponent', () => {
  let component: TopcollectionComponent;
  let fixture: ComponentFixture<TopcollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopcollectionComponent]
    });
    fixture = TestBed.createComponent(TopcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
