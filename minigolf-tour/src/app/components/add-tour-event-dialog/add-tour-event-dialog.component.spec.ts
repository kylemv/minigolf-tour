import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTourEventDialogComponent } from './add-tour-event-dialog.component';

describe('AddTourEventDialogComponent', () => {
  let component: AddTourEventDialogComponent;
  let fixture: ComponentFixture<AddTourEventDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTourEventDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTourEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
