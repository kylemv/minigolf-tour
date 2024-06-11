import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourEventDetailsComponent } from './tour-event-details.component';

describe('TourEventDetailsComponent', () => {
  let component: TourEventDetailsComponent;
  let fixture: ComponentFixture<TourEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourEventDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
