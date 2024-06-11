import { Component } from '@angular/core';

import { TourEvent } from '../types/TourEvent';

@Component({
  selector: 'app-tour-event',
  standalone: true,
  imports: [],
  templateUrl: './tour-event.component.html',
  styleUrl: './tour-event.component.css'
})
export class TourEventComponent {
    event: TourEvent = {
        name: 'Mitchells',
        date: new Date("2024-06-09")
        // course: new Course("Mitchells")
    };
}
