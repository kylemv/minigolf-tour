import { Component } from '@angular/core';

import { Course } from '../types/Course';
import { TourEvent } from '../types/TourEvent';

@Component({
  selector: 'app-tour-event',
  templateUrl: './tour-event.component.html',
  styleUrls: ['./tour-event.component.css']
})
export class TourEventComponent {
    event: TourEvent = {
        name: 'Mitchells',
        date: new Date("2024-06-09")
        // course: new Course("Mitchells")
    };
}
