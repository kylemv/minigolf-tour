import { Hole } from "./Hole";

export interface Course
{
    name: String;

    holes: Hole[];

    par: Number;
}