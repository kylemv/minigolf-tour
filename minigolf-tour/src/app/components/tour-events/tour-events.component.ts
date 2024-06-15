import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, MatSortModule} from '@angular/material/sort';

import { TourEvent } from '../../types/TourEvent';
import { TourDataService } from '../../services/tour-data.service';
import { AddTourEventDialogComponent } from '../add-tour-event-dialog/add-tour-event-dialog.component';

@Component({
  selector: 'app-tour-events',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatToolbar, MatSortModule],
  templateUrl: './tour-events.component.html',
  styleUrl: './tour-events.component.css'
})
export class TourEventsComponent implements OnInit, AfterViewInit {
    eventsService: TourDataService = inject(TourDataService);

    events: TourEvent[] = [];
    displayedColumns: string[] = ['Name', 'Date', 'Number of Players', 'Details'];
    columnsToDisplay: string[] = this.displayedColumns.slice();

    @ViewChild(MatTable) table!: MatTable<TourEvent>;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(public dialog: MatDialog) {
        
    }

    ngOnInit(): void {
        this.events = this.eventsService.getTourEvents();
    }

    ngAfterViewInit(): void {
        this.sort.sortChange.subscribe(() => {
            this.reSort();
        })
    }

    addTourEventDialog(): void {

    }

    reSort(): void {
        let ltVal = (this.sort.direction === "desc") ? 1 : -1;

        switch (this.sort.active) {
            case "Name": {
                this.events.sort(
                    (a,b) => a.name < b.name ? ltVal : a.name > b.name ? -1*ltVal: 0
                );

                break;
            }
            case "Date": {
                this.events.sort(
                    (a,b) => a.date < b.date ? ltVal : a.date > b.date ? -1*ltVal: 0
                );
                break;
            }
            case "Number of Players": {
                this.events.sort(
                    (a,b) => a.scores.length < b.scores.length ? ltVal : a.scores.length > b.scores.length ? -1*ltVal: 0
                );
                break;
            }
            default: {
                break;
            }
        }

        this.table.renderRows();
    }
}
