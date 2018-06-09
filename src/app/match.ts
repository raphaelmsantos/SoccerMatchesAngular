import { Team } from "./team";

export class Match {
	public id : number;
    public homeTeam : Team;
    public awayTeam : Team;
    public date: Date;
    public homeTeamScore: number;
    public awayTeamScore: number;
	constructor(){
		
	}
}
