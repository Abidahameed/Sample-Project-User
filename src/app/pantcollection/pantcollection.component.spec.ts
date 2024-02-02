import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantcollectionComponent } from './pantcollection.component';

describe('PantcollectionComponent', () => {
  let component: PantcollectionComponent;
  let fixture: ComponentFixture<PantcollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantcollectionComponent]
    });
    fixture = TestBed.createComponent(PantcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
