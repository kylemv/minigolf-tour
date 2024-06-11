import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatMenuModule,
    FooterComponent,
    HeaderComponent,
    LeaderboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minigolf-tour';
}
