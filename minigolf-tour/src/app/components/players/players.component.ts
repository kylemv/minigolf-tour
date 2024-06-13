import { Component, inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSort, MatSortModule} from '@angular/material/sort';

import { Player } from '../../types/Player';
import { TourDataService } from '../../services/tour-data.service';
import { AddPlayerDialogComponent } from '../add-player-dialog/add-player-dialog.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbar,
    MatButtonModule,
    MatSortModule
    ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit, AfterViewInit {
    dataService: TourDataService = inject(TourDataService);

    players: Player[] = [];
    
    displayedColumns: string[] = ['Name', 'ID'];

    @ViewChild(MatTable) table!: MatTable<Player>;
    @ViewChild(MatSort) sort!: MatSort;

    constructor (public dialog: MatDialog) { }

    ngOnInit(): void {
        this.getPlayers();
    }

    ngAfterViewInit(): void {
        this.sort.sortChange.subscribe(() => {
            this.reSort()
        });
    }

    addPlayerDialog(): void {
        let name: String = "";

        const dialogRef = this.dialog.open(AddPlayerDialogComponent, { data: {name: name}});

        dialogRef.afterClosed().subscribe(result => {
            this.upload(result);
            this.table.renderRows();
        });

    }

    getPlayers(): void {
        this.players = this.dataService.getPlayers();
    }

    upload(playerName: String): void {
        this.dataService.addPlayer(playerName);

        this.getPlayers();
    }

    reSort(): void {
        let ltVal = -1;
        if (this.sort.direction === "desc") {
            ltVal = 1;
        }

        if (this.sort.active === "Name") {
            this.players.sort(
                (a,b) => a.name < b.name ? ltVal : a.name > b.name ? -1*ltVal: 0
            );
        }
        else if (this.sort.active == "ID") {
            this.players.sort(
                (a,b) => a.id < b.id ? ltVal : a.id > b.id ? -1*ltVal: 0
            );
        }

        this.table.renderRows();
    }
}
