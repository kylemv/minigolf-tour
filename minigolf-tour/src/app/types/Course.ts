import { Hole } from "./Hole";

export interface Course
{
    name: String;

    id: Number;

    holes: Hole[];

    par: Number;
}