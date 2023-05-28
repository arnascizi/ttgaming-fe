import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReviewService} from "../../../services/review.service";
import {ReviewRequest} from "../../../interfaces/review-request";
import {take} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  @Input() username!: string | undefined;
  @Input() gameId!: number;
  @Input() userEmail!: string | undefined;
  @Input() openReview!: boolean;
  @Output() closeReview: EventEmitter<boolean> = new EventEmitter<boolean>();
  rating!: number;
  reviewContent!: string;
  review: ReviewRequest = new ReviewRequest();

  constructor(private reviewService: ReviewService,
              private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.initDefaultValues();
  }

  initDefaultValues() {
    if (this.username != null) {
      this.review.username = this.username;
    }
    this.review.gameId = this.gameId;
  }

  submitReview() {
    this.reviewService
      .postReview(this.review)
      .pipe(
        take(1)
      )
      .subscribe(
        res => {
          this.snackBar.open('Review posted!', 'ok')
            .afterDismissed()
            .subscribe(() => {
              window.location.reload();
            });
        }
      );
  }

  doAddNewReview() {
    this.openReview = !this.openReview;
    this.closeReview.emit(this.openReview);
  }

}
