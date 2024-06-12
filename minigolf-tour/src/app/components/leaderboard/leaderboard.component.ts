import { AfterViewInit, Component,inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatSort, MatSortModule, SortDirection} from '@angular/material/sort';

import { PlayerScore, LeaderScore } from '../../types/PlayerScore';
import { TourDataService } from '../../services/tour-data.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTabsModule, MatSortModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent implements AfterViewInit {
    dataService: TourDataService = inject(TourDataService);

    leaderboard: LeaderScore[] = [];
    scoreBoard: PlayerScore[] = [];
    strokesBoard: PlayerScore[] = [];

    displayedColumns: string[] = ['Place', 'Name', 'Score', 'Number of Events'];
    columnsToDisplay: string[] = this.displayedColumns.slice();

    scoreLeaderDisplayedColumns: string[] = ['Place', 'Name', 'Points', 'Number of Events'];
    scoreLeaderColumnsToDisplay: string[] = this.scoreLeaderDisplayedColumns.slice();

    source = new MatTableDataSource(this.scoreBoard);

    @ViewChild(MatSort) sort = new MatSort;

    constructor() {
        this.scoreBoard = this.dataService.getScoreBoard();
        this.strokesBoard = this.dataService.getScoreBoard();
        this.leaderboard = this.dataService.getLeaderboard();

        this.getScoreLeader()
    }

    ngAfterViewInit() {
        this.source.sort = this.sort;
    }

    getScoreLeader() {
        this.scoreBoard.sort((a,b) => a.totalPoints < b.totalPoints ? 1 : a.totalPoints > b.totalPoints ? -1 : 0)
        // this.strokesBoard.sort((a,b) => a.totalStrokes < b.totalStrokes ? 1 : a.totalStrokes > b.totalStrokes ? -1 : 0)
        this.leaderboard.sort((a,b) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0)
    }

    onChange(event: MatTabChangeEvent) {
    }
}
