import { Component, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { TourEvent } from '../../types/TourEvent';
import { TourDataService } from '../../services/tour-data.service';

@Component({
  selector: 'app-tour-event-details',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tour-event-details.component.html',
  styleUrl: './tour-event-details.component.css'
})
export class TourEventDetailsComponent implements OnInit {
    eventsService: TourDataService = inject(TourDataService);

    event: TourEvent | undefined;

    displayedColumns: string[] = ['Place', 'Player', 'Strokes', 'Points'];

    constructor (private route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'))

        this.event = this.eventsService.getTourEvent(id);

        this.event.results.sort((a,b)=>a.points<b.points ? 1 : a.points>b.points ? -1 : 0)
    }
}
