import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Team } from './team';


@Injectable()
export class TeamService {

  private apiUrl = environment.url + "/Team";

  constructor(private http: HttpClient) { }

  getAll() : Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}`);
  }

  getById(id: number) : Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/${id}`);  
  }

  add(team: Team) : Observable<Team>{
    return this.http.post<Team>(`${this.apiUrl}/`, JSON.stringify(team));
  }

  edit(team: Team) : Observable<Team>{
    return this.http.put<Team>(`${this.apiUrl}/${team.id}`, JSON.stringify(team));
  }
}