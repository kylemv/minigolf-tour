import { Injectable } from '@angular/core';

import { Player } from '../types/Player'

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

    constructor() { }

    players: Player[] = [
        {
            name: 'A',
            id: 0
        },
        {
            name: 'B',
            id: 1
        }
    ];

    getLeaderboard(): Player[] {
        return this.players;
    }
}
