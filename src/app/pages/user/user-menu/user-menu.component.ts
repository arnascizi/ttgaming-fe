import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../../interfaces/user-details";
import {first, Observable, take} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmationDialogComponent} from "../../../components/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  userForm!: FormGroup;
  user!: Observable<UserDetails | null>;
  edit: boolean = false;
  displayColumns: string[] = ['position', 'title', 'releaseYear'];
  constructor(private route: ActivatedRoute,
              private authService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;

    this.userForm = this.fb.group({
      username: [],
      email: [],
      oldPassword: [],
      newPassword: [],
      repeatPassword: []
    });
  }

  editMode() {
    this.edit = !this.edit;
  }

  openGame(id: string) {
    this.router.navigate(['/board/game', id]);
  }


  onSubmit(username: string | undefined, email: string | undefined) {
    if (this.userForm.invalid) {
      return;
    }
    this.userForm.value.username = username;
    this.userForm.value.email = email;

    console.log(this.userForm.value);

    this.authService.update(this.userForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.snackBar.open('User updated!', 'ok');
        },
        error: error => {
          this.snackBar.open(error, 'ok');
        }
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {user: this.user},
      width: '450px',
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.delete();
        this.snackBar.open('Successfully deleted!', 'ok');
      }
    });
  }

  private delete() {
    // this.authService
    //   .deleteAccount(this.user.id)
    //   .pipe(
    //     take(1)
    //   )
    //   .subscribe(
    //     res => {
    //       this.router.navigateByUrl(`/board`);
    //     }
    //   );
  }
}
