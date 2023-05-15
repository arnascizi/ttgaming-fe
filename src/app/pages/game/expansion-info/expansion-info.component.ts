import {Component, Input, OnInit} from '@angular/core';
import {Expansion} from "../../../interfaces/expansion";

@Component({
  selector: 'app-expansion-info',
  templateUrl: './expansion-info.component.html',
  styleUrls: ['./expansion-info.component.css']
})
export class ExpansionInfoComponent implements OnInit{

  @Input() expansion!: Expansion;
  constructor() {

  }


  ngOnInit(): void {
  }

}
