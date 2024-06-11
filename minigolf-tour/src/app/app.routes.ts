import { Routes } from '@angular/router';

import { CoursesComponent } from './components/courses/courses.component'
import { PlayersComponent } from './components/players/players.component'
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { TourEventsComponent } from './components/tour-events/tour-events.component';

export const routes: Routes = [
    {
        path: '',
        component: LeaderboardComponent,
        title: 'Leaderboard'
    },
    {
        path: 'leaderboard',
        component: LeaderboardComponent,
        title: 'Leaderboard'
    },
    {
        path: 'tour-events',
        component: TourEventsComponent,
        title: 'Tour Events'
    },
    {
        path: 'tour-events/:id',
        component: TourEventsComponent,
        title: 'Tour Event Details'
    },
    {
        path: 'players',
        component: PlayersComponent,
        title: 'Players'
    },
    {
        path: 'courses',
        component: CoursesComponent,
        title: 'Courses'
    },
    {
        path: 'courses/:id',
        component: CoursesComponent,
        title: 'Course Details'
    }
];

export default routes;