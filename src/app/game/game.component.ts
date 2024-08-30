import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatInputModule } from '@angular/material/input';
import { GameRulesComponent } from "../game-rules/game-rules.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatInputModule, GameRulesComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  takeCardAnimation = false;
  currentCard: string = '';
  game!: Game;

  constructor(public dialog: MatDialog) {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.takeCardAnimation) {
      let card = this.game.stack.pop();
      if (card != undefined) {
        this.currentCard = card;
      }
      console.log(this.currentCard);
      this.takeCardAnimation = true;


      console.log('new card:', this.game.playedCards);
      console.log('game is:', this.game);


      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.takeCardAnimation = false;
      }, 900);
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      this.game.players.push(name);
      console.log(this.game);
    });
  }
}
