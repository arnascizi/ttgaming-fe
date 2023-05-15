import {Component, OnInit} from '@angular/core';
import {BoardGame} from "../../common/model/board-game";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GameService} from "../../services/game.service";
import {Location} from "@angular/common";
import {PublisherService} from "../../services/publisher.service";
import {CategoryService} from "../../services/category.service";
import {Publisher} from "../../common/model/publisher";
import {Category} from "../../common/model/category";
import {Mechanic} from "../../common/model/mechanic";
import {MechanicService} from "../../services/mechanic.service";
import {map, startWith, take, tap} from "rxjs";
import {DesignerService} from "../../services/designer.service";
import {Designer} from "../../common/model/designer";
import {Router} from "@angular/router";
import {ConfirmationDialogComponent} from "../../common/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ItemComponent} from "../../common/item/item.component";

@Component({
  selector: 'app-new-board-game',
  templateUrl: './new-board-game.component.html',
  styleUrls: ['./new-board-game.component.css']
})
export class NewBoardGameComponent implements OnInit{
  gameForm!: FormGroup;
  isSubmitted: boolean = false;
  publishers!: Publisher[];
  categories!: Category[];
  mechanics!: Mechanic[];
  designers!: Designer[];
  category!: Category;
  mechanic!: Mechanic;
  publisher!: Publisher;
  designer!: Designer;

  game!: BoardGame;

  constructor(private gameService: GameService,
              private categoryService: CategoryService,
              private publisherService: PublisherService,
              private mechanicService: MechanicService,
              private designerService: DesignerService,
              private dialog: MatDialog,
              private router: Router,
              public location: Location,
              private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.init();

    this.gameForm = this.fb.group({
      name: [],
      releaseYear: [],
      description: [],
      minPlayers: [],
      maxPlayers: [],
      minAge: [],
      duration: [],
      imgUrl: [],
      mechanics: [],
      designers: [],
      categories: [],
      publishers: []
    });
  }

  newCategory() {
    const dialogRef = this.dialog.open(ItemComponent, {
      data: {category: this.category},
      width: '450px',
    }).afterClosed().subscribe(confirmed => {

    });
  }
  get formControls(): any {
    return this.gameForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    this.addGame();
  }

  private addGame() {
    this.gameService
      .addNewGame(this.gameForm.value)
      .pipe(
        take(1)
      )
      .subscribe(
        res => {
          alert("Game added!")
          this.router.navigateByUrl(`/board`);
        }
      );
  }

  private init() {
    this.initMechanics();
    this.initDesigners();
    this.initCategories();
    this.initPublishers();
  }

  private initMechanics() {
    this.mechanicService
      .getAllMechanics()
      .pipe(
        take(1),
        tap((mechanics) => {
          this.mechanics = mechanics;
        })
      )
      .subscribe();
  }

  private initCategories() {
    this.categoryService
      .getAllCategories()
      .pipe(
        take(1),
        tap((categories) => {
          this.categories = categories;
        })
      )
      .subscribe();
  }

  private initDesigners() {
    this.designerService
      .getAllDesigners()
      .pipe(
        take(1),
        tap((designers) => {
          this.designers = designers;
        })
      )
      .subscribe();
  }

  private initPublishers() {
    this.publisherService
      .getAllPublishers()
      .pipe(
        take(1),
        tap((publishers) => {
          this.publishers = publishers;
        })
      )
      .subscribe();
  }
}
