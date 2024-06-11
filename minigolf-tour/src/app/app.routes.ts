import { Routes } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

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
    }
];

export default routes;