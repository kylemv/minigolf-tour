import { Course } from "./Course";
import { EventScore, EventResult } from "./EventScore"

export interface TourEventId
{
    name: String;

    date: String;

    id: Number;
}

export interface TourEvent
{
    name: String;

    date: String;

    id: Number;

    course: Course;

    scores: EventScore[];
}

export interface TourEventResults
{
    event: TourEvent;

    results: EventResult[];
}