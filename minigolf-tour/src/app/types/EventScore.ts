import { Player } from './Player'
import { HoleScore } from './HoleScore'

export interface EventScore
{
    player: Player;

    scores: HoleScore[];

    strokes: Number;
}