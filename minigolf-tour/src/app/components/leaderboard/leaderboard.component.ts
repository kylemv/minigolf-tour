import { AfterViewInit, OnInit, Component,inject, ViewChild } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatSort, MatSortModule} from '@angular/material/sort';

import { PlayerScore, LeaderScore } from '../../types/PlayerScore';
import { TourDataService } from '../../services/tour-data.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [MatTableModule, MatTabsModule, MatSortModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent implements OnInit {
    dataService: TourDataService = inject(TourDataService);

    leaderboard: LeaderScore[] = [];
    scoreBoard: PlayerScore[] = [];
    strokesBoard: PlayerScore[] = [];

    displayedColumns: string[] = ['Place', 'Name', 'Score', 'Number of Events'];
    columnsToDisplay: string[] = this.displayedColumns.slice();

    scoreLeaderDisplayedColumns: string[] = ['place', 'name', 'totalPoints', 'events'];
    scoreLeaderColumnsToDisplay: string[] = this.scoreLeaderDisplayedColumns.slice();

    source = new MatTableDataSource<PlayerScore>();

    @ViewChild(MatSort, {static: false}) sort = new MatSort();

    constructor() { }

    ngOnInit() {
        this.strokesBoard = this.dataService.getScoreBoard();
        this.leaderboard = this.dataService.getLeaderboard();
        this.scoreBoard = this.dataService.getScoreBoard();

        this.scoreBoard.sort((a,b) => a.totalPoints < b.totalPoints ? 1 : a.totalPoints > b.totalPoints ? -1 : 0)
        this.leaderboard.sort((a,b) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0)

        this.source = new MatTableDataSource(this.scoreBoard);
        this.source.sort = this.sort;
    }

    onChange(event: MatTabChangeEvent) {
    }
}
