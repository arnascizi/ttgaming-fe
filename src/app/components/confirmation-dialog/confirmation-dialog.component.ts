import {Component, Inject, OnInit} from '@angular/core';
import {BoardGame} from "../../interfaces/board-game";
import {GameService} from "../../services/game.service";
import {take, tap} from "rxjs";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: BoardGame) {
  }

  ngOnInit(): void {

  }

  closeDialog(confirmed: boolean) {
    if (confirmed) {
      this.instantAction();
    }

    this.dialogRef.close(confirmed);
  }

  instantAction() {
  }
}
