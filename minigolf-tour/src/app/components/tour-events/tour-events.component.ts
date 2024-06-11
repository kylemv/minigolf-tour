import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import { TourEvent } from '../../types/TourEvent';
import { TourEventsService } from '../../services/tour-events.service';

@Component({
  selector: 'app-tour-events',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './tour-events.component.html',
  styleUrl: './tour-events.component.css'
})
export class TourEventsComponent {
    eventsService: TourEventsService = inject(TourEventsService);

    events: TourEvent[] = [];
    displayedColumns: string[] = ['Name', 'Date', 'Details'];
    columnsToDisplay: string[] = this.displayedColumns.slice();

    constructor() {
        this.events = this.eventsService.getTourEvents();
    }
}
