import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeeanscollectionComponent } from './jeeanscollection.component';

describe('JeeanscollectionComponent', () => {
  let component: JeeanscollectionComponent;
  let fixture: ComponentFixture<JeeanscollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeeanscollectionComponent]
    });
    fixture = TestBed.createComponent(JeeanscollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
