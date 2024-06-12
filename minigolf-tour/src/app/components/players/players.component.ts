import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { Player } from '../../types/Player';
import { TourDataService } from '../../services/tour-data.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
    dataService: TourDataService = inject(TourDataService);

    players: Player[] = [];
    displayedColumns: string[] = ['Name', 'ID'];
    columnsToDisplay: string[] = this.displayedColumns.slice();

    constructor () {
        this.players = this.dataService.getPlayers();
    }
}
