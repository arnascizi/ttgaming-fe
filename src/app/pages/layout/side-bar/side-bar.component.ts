import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {take, tap} from "rxjs";
import {BoardGamePreview} from "../../../interfaces/board-game-preview";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() topGames!: BoardGamePreview[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
