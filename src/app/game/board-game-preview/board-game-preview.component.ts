import {Component, Input, OnInit} from '@angular/core';
import {BoardGamePreview} from "../../common/model/board-game-preview";

@Component({
  selector: 'app-board-game-preview',
  templateUrl: './board-game-preview.component.html',
  styleUrls: ['./board-game-preview.component.css']
})
export class BoardGamePreviewComponent implements OnInit{
  @Input() game!: BoardGamePreview;
  constructor() {
  }

  ngOnInit() {

  }
}
