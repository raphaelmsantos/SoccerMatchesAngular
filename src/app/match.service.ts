import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Match } from './match';

@Injectable()
export class MatchService {

  private apiUrl = environment.url + "/Match";

  constructor(private http: HttpClient) { }

  getAll() : Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}`);
  }

  getById(id: number) : Observable<Match> {
    return this.http.get<Match>(`${this.apiUrl}/${id}`);  
  }

  add(match: Match) : Observable<Match>{
    return this.http.post<Match>(`${this.apiUrl}/`, JSON.stringify(match));
  }

  edit(match: Match) : Observable<Match>{
    return this.http.put<Match>(`${this.apiUrl}/${match.id}`, JSON.stringify(match));
  }
}