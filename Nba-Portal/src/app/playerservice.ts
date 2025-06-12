import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class Playerservice {
  players: Player[];
  constructor() {
    this.players = [
      { Firstname: "LeBron", Lastname: "James", id: 1, team: "Lakers", number: 23, position: "SF" },
      { Firstname: "Stephen", Lastname: "Curry", id: 2, team: "Warriors", number: 30, position: "PG" },
      { Firstname: "Kevin", Lastname: "Durant", id: 3, team: "Suns", number: 35, position: "SF" },
      { Firstname: "Giannis", Lastname: "Antetokounmpo", id: 4, team: "Bucks", number: 34, position: "PF" },
      { Firstname: "Luka", Lastname: "Doncic", id: 5, team: "Mavericks", number: 77, position: "PG" },
      { Firstname: "Jayson", Lastname: "Tatum", id: 6, team: "Celtics", number: 0, position: "SF" },
      { Firstname: "Nikola", Lastname: "Jokic", id: 7, team: "Nuggets", number: 15, position: "C" },
      { Firstname: "Joel", Lastname: "Embiid", id: 8, team: "76ers", number: 21, position: "C" },
      { Firstname: "Devin", Lastname: "Booker", id: 9, team: "Suns", number: 1, position: "SG" },
      { Firstname: "Jimmy", Lastname: "Butler", id: 10, team: "Heat", number: 22, position: "SF" },
      { Firstname: "Kawhi", Lastname: "Leonard", id: 11, team: "Clippers", number: 2, position: "SF" }
    ]
  }
  getPlayers():Player[]{
    return this.players;
  }
  getPlayerbyId(id:Number):Player | undefined{
     
    return this.getPlayers().find((element) => {
      return element.id == id
    }
    )
     
  }
  
}
