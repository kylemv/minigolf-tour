import { Player } from './Player'
import { HoleScore } from './HoleScore'

export interface EventScore
{
    player: Player;

    // scores: HoleScore[];

    strokes: Number;
}

export interface EventResult
{
    player: Player;

    strokes: Number;

    place: Number;

    points: Number;
}