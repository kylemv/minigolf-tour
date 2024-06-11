import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourEventComponent } from './tour-event.component';

describe('TourEventComponent', () => {
  let component: TourEventComponent;
  let fixture: ComponentFixture<TourEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourEventComponent]
    });
    fixture = TestBed.createComponent(TourEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
