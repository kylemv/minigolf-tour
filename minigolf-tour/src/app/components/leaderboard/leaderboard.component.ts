import { AfterViewInit, OnInit, Component,inject, ViewChild } from '@angular/core';

import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
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
export class LeaderboardComponent implements OnInit, AfterViewInit {
    dataService: TourDataService = inject(TourDataService);

    leaderboard: LeaderScore[] = [];
    scoreBoard: PlayerScore[] = [];

    displayedColumns: string[] = ['Place', 'Name', 'Score', 'Number of Events'];

    scoreLeaderDisplayedColumns: string[] = ['place', 'name', 'totalPoints', 'strokes', 'totalParScore', 'events'];

    leaderboardSource = new MatTableDataSource<LeaderScore>();
    scoreboardSource = new MatTableDataSource<PlayerScore>();

    // @ViewChild(MatTable) table!: MatTable<LeaderScore>;
    // @ViewChild(MatTable) table2!: MatTable<PlayerScore>;
    @ViewChild(MatSort) sort!: MatSort;

    constructor() { }

    ngOnInit(): void {
        this.leaderboard = this.dataService.getLeaderboard();
        this.scoreBoard = this.dataService.getScoreBoard();

        this.scoreBoard.sort((a,b) => a.totalPoints < b.totalPoints ? 1 : a.totalPoints > b.totalPoints ? -1 : 0)
        this.leaderboard.sort((a,b) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0)

        this.leaderboardSource = new MatTableDataSource(this.leaderboard);
        this.scoreboardSource = new MatTableDataSource(this.scoreBoard);

        this.scoreboardSource.sort = this.sort;
    }

    ngAfterViewInit(): void {
        this.sort.sortChange.subscribe(() => {
            this.reSort();
        })
        // this.table.dataSource = this.scoreBoard;
    }

    onChange(event: MatTabChangeEvent) {
    }

    reSort() {
        let ltVal = (this.sort.direction === "desc") ? 1 : -1;

        console.log(this.sort.direction + " " + this.sort.active)

        switch (this.sort.active) {
            case "place": {
                break;
            }
            case "name": {
                this.scoreBoard.sort(
                    (a,b) => a.player.name < b.player.name ? ltVal : a.player.name > b.player.name ? -1*ltVal : 0
                );
                break;
            }
            case "totalPoints": {
                this.scoreBoard.sort(
                    (a,b) => a.totalPoints < b.totalPoints ? ltVal : a.totalPoints > b.totalPoints ? -1*ltVal : 0
                );
                break;
            }
            case "strokes": {
                this.scoreBoard.sort(
                    (a,b) => a.totalStrokes < b.totalStrokes ? ltVal : a.totalStrokes > b.totalStrokes ? -1*ltVal : 0
                );
                break;
            }
            case "totalParScore": {
                this.scoreBoard.sort(
                    (a,b) => a.totalParScore < b.totalParScore ? ltVal : a.totalParScore > b.totalParScore ? -1*ltVal : 0
                );
                break;
            }
            case "events": {
                this.scoreBoard.sort(
                    (a,b) => a.events.length < b.events.length ? ltVal : a.events.length > b.events.length ? -1*ltVal : 0
                );
                break;
            }
            default: {
                break;
            }
        }

        
    }
}
