import { Component,inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { LeaderboardService } from '../../services/leaderboard.service';

import { Player } from '../../types/Player'

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
    leaderboardService: LeaderboardService = inject(LeaderboardService);

    leaderboard: Player[] = []
    displayedColumns: string[] = ['name', 'score'];
    columnsToDisplay: string[] = this.displayedColumns.slice();

    constructor() {
        this.leaderboard = this.leaderboardService.getLeaderboard()
    }
}
