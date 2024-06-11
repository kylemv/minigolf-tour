import { Injectable } from '@angular/core';

import { Player } from '../types/Player'

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

    constructor() { }

    players: Player[] = [
        {
            name: 'A'
        },
        {
            name: 'B'
        }
    ];

    getLeaderboard(): Player[] {
        return this.players;
    }
}
