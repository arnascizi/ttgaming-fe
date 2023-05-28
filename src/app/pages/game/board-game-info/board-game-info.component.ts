import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {take, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {BoardGame} from "../../../interfaces/board-game";
import {ExpansionService} from "../../../services/expansion.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../components/confirmation-dialog/confirmation-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ReviewService} from "../../../services/review.service";
import {ReviewRequest} from "../../../interfaces/review-request";
import {AuthenticationService} from "../../../services/authentication.service";
import {UserDetails} from "../../../interfaces/user-details";

@Component({
  selector: 'app-board-game-info',
  templateUrl: './board-game-info.component.html',
  styleUrls: ['./board-game-info.component.css']
})
export class BoardGameInfoComponent implements OnInit {
  @Input() game!: BoardGame;
  @Input() edit: boolean = false;
  @Input() expansions: boolean = false;
  @Input() reviews: boolean = true;
  review!: ReviewRequest;
  addNewReview: boolean = false;
  loggedUser!: string | undefined;
  email!: string | undefined;
  user?: UserDetails | null;

  constructor(
    public auth: AuthenticationService,
    public dialog: MatDialog,
    private gameService: GameService,
    private expansionService: ExpansionService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private reviewService: ReviewService
  ) {
    this.auth.user.subscribe(u => this.user = u);
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        take(1),
        tap((paramMap) => {
          const id = paramMap.get(`id`);
          if (id) {
            this.getBoardGame(+id);
          }
        })
      )
      .subscribe();

    this.auth.userValue.pipe(
      take(1),
      tap((user) => {
          this.loggedUser = user?.username;
          this.email = user?.email;
      })
    ).subscribe();
  }

  private getBoardGame(id: number) {
    this.gameService
      .getGameById(id)
      .pipe(
        take(1),
        tap(
          value => {
            this.game = value;
          }
        )
      )
      .subscribe();
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  updateInfo() {
    this.edit = !this.edit;
  }

  delete() {
    this.gameService
      .deleteGame(this.game.id)
      .pipe(
        take(1)
      )
      .subscribe(
        res => {
          this.router.navigateByUrl(`/board`);
        }
      );
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {game: this.game},
      width: '450px',
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.delete();
        this.snackBar.open('Successfully deleted!', 'ok');
      }
    });
  }

  postReview() {
    // this.review.loggedUser = this.auth.userValue;
    // TODO reviews
    this.reviewService.postReview(this.review)
      .pipe(
        take(1)
      )
      .subscribe( Review => {
          this.snackBar.open('Review posted!', 'ok');
        }
      );
  }

  doAddNewReview() {
    this.addNewReview = !this.addNewReview;
  }
}
