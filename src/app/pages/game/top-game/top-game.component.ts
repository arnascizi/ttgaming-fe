import {Component, Input, OnInit} from '@angular/core';
import {Expansion} from "../../../interfaces/expansion";
import {BoardGamePreview} from "../../../interfaces/board-game-preview";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-game',
  templateUrl: './top-game.component.html',
  styleUrls: ['./top-game.component.css']
})
export class TopGameComponent implements OnInit{

  @Input() game!: BoardGamePreview;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  openGame(id: number) {
    this.router.navigate(['/board/game', id]);
  }

  protected readonly top = top;
}
