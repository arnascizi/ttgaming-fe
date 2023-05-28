import {Component, OnInit} from '@angular/core';
import {BoardGame} from "../../../interfaces/board-game";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../../../services/game.service";
import {Location} from "@angular/common";
import {PublisherService} from "../../../services/publisher.service";
import {CategoryService} from "../../../services/category.service";
import {Publisher} from "../../../interfaces/publisher";
import {Category} from "../../../interfaces/category";
import {Mechanic} from "../../../interfaces/mechanic";
import {MechanicService} from "../../../services/mechanic.service";
import {take, tap} from "rxjs";
import {DesignerService} from "../../../services/designer.service";
import {Designer} from "../../../interfaces/designer";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ItemComponent} from "../../../components/item/item.component";
import {MatSnackBar} from "@angular/material/snack-bar";

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
              private snackBar: MatSnackBar,
              private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.init();

    this.gameForm = this.fb.group({
      name: ['', Validators.required],
      releaseYear: [''],
      description: [''],
      minPlayers: ['', Validators.min(1)],
      maxPlayers: ['', Validators.max(8)],
      minAge: ['', Validators.min(5)],
      duration: [''],
      imgUrl: [''],
      mechanics: ['', Validators.required],
      designers: [''],
      categories: ['', Validators.required],
      publishers: ['']
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
          this.snackBar.open('Game added!', 'ok');
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
