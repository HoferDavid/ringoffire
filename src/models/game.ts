

export class Game {
  public players: string[] = [];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 11; i++) {
      this.stack.push('ace_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
      this.stack.push('hearts_' + i);
    }
    shuffle(this.stack);
  }
}


// function addGame() {
//   let game: Game = {
//     players: this.players,
//     stack: this.stack,
//     playedCards: this.playedCards,
//     currentPlayer: this.currentPlayer,
//   }
//   this.gameService.addGame(game);
// }

function shuffle(array: string[]) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
