import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardGamesComponent} from './game/board-games/board-games.component';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {BoardGameInfoComponent} from './game/board-game-info/board-game-info.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BoardGamePreviewComponent} from './game/board-game-preview/board-game-preview.component';
import {FooterComponent} from './layout/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {NewBoardGameComponent} from './game/new-board-game/new-board-game.component';
import {HomeComponent} from './layout/home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ExpansionInfoComponent} from './game/expansion-info/expansion-info.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatStepperModule} from "@angular/material/stepper";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from './common/confirmation-dialog/confirmation-dialog.component';
import {MatRippleModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import {MatChipsModule} from "@angular/material/chips";
import { ItemComponent } from './common/item/item.component';
import { UserMenuComponent } from './user/user-menu/user-menu.component';
import {JwtInterceptor} from "./common/helper/jwt.interceptor";
import {ErrorInterceptor} from "./common/helper/error.interceptor";
import { AlertComponent } from './common/alert/alert.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    BoardGamesComponent,
    NavigationComponent,
    BoardGameInfoComponent,
    BoardGamePreviewComponent,
    FooterComponent,
    NewBoardGameComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExpansionInfoComponent,
    ConfirmationDialogComponent,
    SideBarComponent,
    ItemComponent,
    UserMenuComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatListModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRippleModule,
    MatSnackBarModule,
    MatChipsModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   },
    //   compiler: {
    //     provide: TranslateCompiler,
    //     useClass: TranslateMessageFormatCompiler
    //   }
    // })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class AppModule {
}

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
