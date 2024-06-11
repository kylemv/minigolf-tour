import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourEventsComponent } from './tour-events.component';

describe('TourEventsComponent', () => {
  let component: TourEventsComponent;
  let fixture: ComponentFixture<TourEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
