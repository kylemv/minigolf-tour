import { Player } from "./Player";
import { TourEventId } from "./TourEvent";
import { EventScore } from "./EventScore";

export interface PlayerScore
{
    player: Player;

    events: TourEventId[];

    scores: EventScore[];

    totalPoints: Number;

    totalStrokes: Number;

    totalParScore: Number;
}

export interface LeaderScore
{
    player: Player;

    score: Number;

    numberOfEvents: Number;
}