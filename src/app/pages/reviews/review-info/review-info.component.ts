import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../../../interfaces/review";

@Component({
  selector: 'app-review-info',
  templateUrl: './review-info.component.html',
  styleUrls: ['./review-info.component.css']
})
export class ReviewInfoComponent implements OnInit {
  @Input() review!: Review;

  constructor() {
  }

  ngOnInit() {
  }

}
