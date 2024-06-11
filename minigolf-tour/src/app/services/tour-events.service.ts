import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TourEvent } from '../types/TourEvent'
import { Observable } from 'rxjs';

import { events } from '../../../public/tour-events.json'

@Injectable({
    providedIn: 'root'
})
export class TourEventsService {

    constructor() { 
        this.events = events;
    }

    events: TourEvent[] = [];

    getTourEvents(): TourEvent[] {
        return this.events;
    }

    // loadEvents(): Observable<any> {
    //     return this.http.get("../../../public/tour-events.json")
    // }
}
