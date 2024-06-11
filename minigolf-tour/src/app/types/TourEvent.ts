import { Course } from "./Course";
import { EventScore } from "./EventScore"

export interface TourEvent
{
    name: String;

    date: String;

    course: Course;

    scores: EventScore[];
}