import { Component, OnInit } from '@angular/core';
import { MatchService } from './match.service';
import { TeamService } from './team.service';
import { Team } from './team';
import { Match } from 'src/app/match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  teams: Team[] = [];
  matches: Match[] = [];
  
  constructor(private teamService: TeamService, private matchService: MatchService) {    
  }

  ngOnInit(): void {
    this.teamService
      .getAll()
      .subscribe(
      c => { this.teams = c; }      
      );

      this.matchService
      .getAll()
      .subscribe(
      c => { this.matches = c; }      
      );
  }

}
