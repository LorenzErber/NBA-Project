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
      { Firstname: "Kawhi", Lastname: "Leonard", id: 11, team: "Clippers", number: 2, position: "SF" },
      { Firstname: "Anthony", Lastname: "Davis", id: 12, team: "Lakers", number: 3, position: "PF" },
      { Firstname: "Damian", Lastname: "Lillard", id: 13, team: "Bucks", number: 0, position: "PG" },
      { Firstname: "Ja", Lastname: "Morant", id: 14, team: "Grizzlies", number: 12, position: "PG" },
      { Firstname: "Zion", Lastname: "Williamson", id: 15, team: "Pelicans", number: 1, position: "PF" },
      { Firstname: "Paul", Lastname: "George", id: 16, team: "Clippers", number: 13, position: "SF" },
      { Firstname: "Donovan", Lastname: "Mitchell", id: 17, team: "Cavaliers", number: 45, position: "SG" },
      { Firstname: "Shai", Lastname: "Gilgeous-Alexander", id: 18, team: "Thunder", number: 2, position: "PG" },
      { Firstname: "Tyrese", Lastname: "Haliburton", id: 19, team: "Pacers", number: 0, position: "PG" },
      { Firstname: "Victor", Lastname: "Wembanyama", id: 20, team: "Spurs", number: 1, position: "C" },
      { Firstname: "Paolo", Lastname: "Banchero", id: 21, team: "Magic", number: 5, position: "PF" },
      { Firstname: "Scottie", Lastname: "Barnes", id: 22, team: "Raptors", number: 4, position: "SF" },
      { Firstname: "Franz", Lastname: "Wagner", id: 23, team: "Magic", number: 22, position: "SF" },
      { Firstname: "Alperen", Lastname: "Sengun", id: 24, team: "Rockets", number: 28, position: "C" },
      { Firstname: "Evan", Lastname: "Mobley", id: 25, team: "Cavaliers", number: 4, position: "PF" },
      { Firstname: "Cade", Lastname: "Cunningham", id: 26, team: "Pistons", number: 2, position: "PG" },
      { Firstname: "Jalen", Lastname: "Green", id: 27, team: "Rockets", number: 4, position: "SG" },
      { Firstname: "Anthony", Lastname: "Edwards", id: 28, team: "Timberwolves", number: 5, position: "SG" },
      { Firstname: "Karl-Anthony", Lastname: "Towns", id: 29, team: "Knicks", number: 32, position: "C" },
      { Firstname: "Mikal", Lastname: "Bridges", id: 30, team: "Knicks", number: 25, position: "SF" }
    ];
  }

  getPlayers(): Player[] {
    return this.players;
  }
  getPlayerbyId(id: Number): Player | undefined {

    return this.getPlayers().find((element) => {
      return element.id == id
    }
    )

  }

  GetPlayerBy(filter: string) : Player[]
  {
    let playersorted: Player[] = [];
     if(filter.length == 0){return this.players}
    else
    {
      playersorted = [...playersorted,...this.players.filter((element) =>  element.Firstname.toLocaleLowerCase() == filter.toLocaleLowerCase())];
      playersorted = [...playersorted,...this.players.filter((element) =>  element.Lastname.toLocaleLowerCase() == filter.toLocaleLowerCase())];
      playersorted = [...playersorted,...this.players.filter((element) =>  element.number == Number(filter.toLocaleLowerCase()))];
      playersorted = [...playersorted,...this.players.filter((element) =>  element.team.toLocaleLowerCase()  == filter.toLocaleLowerCase())];
      playersorted = [...playersorted,...this.players.filter((element) =>  element.position.toLocaleLowerCase() == filter.toLocaleLowerCase())];
    }
    return playersorted;
  }
}
