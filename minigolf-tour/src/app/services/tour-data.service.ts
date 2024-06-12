import { Injectable } from '@angular/core';

import { Course } from '../types/Course';
import { Player } from '../types/Player';
import { PlayerScore, LeaderScore } from '../types/PlayerScore';
import { TourEvent, TourEventResults } from '../types/TourEvent'
import { EventResult } from '../types/EventScore';

import { courses, events, players, scoreBoard, leaderboard } from '../../../public/tour-data-update.json'



@Injectable({
  providedIn: 'root'
})
export class TourDataService {
    courseList: Course[] = [];
    eventList: TourEvent[] = [];
    playerList: Player[] = [];
    scoreBoard: PlayerScore[] = [];
    leaderBoard: LeaderScore[] = [];

    eventResults: TourEventResults[] = [];

    constructor() { 
        this.courseList = courses
        this.eventList = events
        this.playerList = players
        this.scoreBoard = scoreBoard
        this.leaderBoard = leaderboard
    }

    getCourses(): Course[] {
        return this.courseList;
    }

    getPlayers(): Player[] {
        return this.playerList;
    }

    getTourEvents(): TourEvent[] {
        return this.eventList;
    }

    getLeaderboard(): LeaderScore[] {
        return this.leaderBoard;
    }

    getNumberOfEvents(): Number {
        return this.eventList.length;
    }

    getScoreBoard(): PlayerScore[] {
        return this.scoreBoard;
    }
}
