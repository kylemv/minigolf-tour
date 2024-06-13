import { Injectable } from '@angular/core';

import { Course } from '../types/Course';
import { Player } from '../types/Player';
import { PlayerScore, LeaderScore } from '../types/PlayerScore';
import { TourEvent } from '../types/TourEvent'
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

    constructor() { 
        this.courseList = courses
        this.eventList = events
        this.playerList = players
        this.scoreBoard = scoreBoard
        this.leaderBoard = leaderboard
    }

    addCourse(course: Course): Course {
        this.courseList.sort((a,b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0)
        
        course.id = this.courseList[this.courseList.length - 1].id.valueOf() + 1;
        
        this.courseList.push(course);
        
        return course;
    }

    addPlayer(playerName: String): Player {
        this.playerList.sort((a,b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0)

        let id: Number = this.playerList[this.playerList.length - 1].id.valueOf() + 1;

        this.playerList.push({
            name: playerName,
            id: id
        })

        console.log(playerName + ' ' + id)

        return this.playerList[this.playerList.length - 1];
    }

    getCourses(): Course[] {
        return this.courseList;
    }

    getPlayers(): Player[] {
        return this.playerList;
    }

    getTourEvent(id: Number): TourEvent {
        for (var event of this.eventList) {
            if (event.id === id) {
                return event;
            }
        }

        return {
            name: 'undefined',
            date: '',
            id: -1,
            course: {
                name: 'undefined',
                id: -1,
                holes: [],
                par: -1
            },
            scores: [],
            results: []
        }
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
