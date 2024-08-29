import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  takeCardAnimation = false;


  takeCard() {
    console.log('takecard');

    this.takeCardAnimation = true;
  }

}
