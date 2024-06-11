import { Course } from "./Course";
import { EventScore } from "./EventScore"

export interface TourEvent
{
    name: String;

    date: String;

    id: Number;

    course: Course;

    scores: EventScore[];
}